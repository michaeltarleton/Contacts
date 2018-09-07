# Create image based on the official Node 6 image from dockerhub
FROM node:10.7.0 AS build

# Expose the port the app runs in
ENV PORT 80
EXPOSE 80

# install angular cli
RUN npm install -g @angular/cli

# copy packages.json files
RUN mkdir -p /build
WORKDIR /build

# install the app packages
WORKDIR /usr/app
COPY package.json /usr/src/app
# RUN npm rebuild node-sass --force
RUN npm install

# copy the app files
COPY . /usr/src/app

# publish the angular app
WORKDIR /usr/src/app
RUN ng serve --prod

# Serve the app
WORKDIR /usr/src/app/server
CMD ["npm", "start"]
