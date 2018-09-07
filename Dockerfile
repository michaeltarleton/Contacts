# Create image based on the official Node 6 image from dockerhub
FROM node:10.9.0-alpine AS build-ui
RUN npm i -g @angular/cli yarn
RUN mkdir /build
WORKDIR /build
COPY angular.json package*.json ts*.json yarn.lock ./
COPY src src
RUN yarn && ng build --prod

FROM node:10.9.0-alpine AS build-server
RUN npm i -g yarn && mkdir /build
WORKDIR /build
COPY server ./
RUN yarn

FROM node:10.9.0-alpine
EXPOSE 80
ENV NODE_ENV production
RUN mkdir /app
WORKDIR /app
COPY --from=build-server /build ./
COPY --from=build-ui /build ./public
ENTRYPOINT [ "node", "server.js" ]
