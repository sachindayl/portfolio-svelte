FROM node:18-alpine

WORKDIR /app

COPY ./repos/portfolio-svelte/package.json ./

RUN npm install

EXPOSE 3100
