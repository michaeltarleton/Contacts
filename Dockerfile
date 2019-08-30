# Build the angular ui
FROM node:alpine AS build-ui
RUN npm config set unsafe-perm true
RUN npm i -g @angular/cli yarn
RUN mkdir /build
WORKDIR /build
COPY angular.json package*.json ts*.json yarn.lock ./
COPY src src
RUN yarn && ng build --prod

# Build the server
FROM node:alpine AS build-server
RUN npm i -g yarn && mkdir /build
WORKDIR /build
COPY server ./
RUN yarn

# Build the final image
FROM node:alpine
EXPOSE 4200
ENV NODE_ENV production
ENV PORT 4200
RUN mkdir /app
WORKDIR /app
COPY --from=build-server /build ./
COPY --from=build-ui /build/dist/* ./public
ENTRYPOINT [ "node", "server.js" ]
