FROM node:18-alpine

WORKDIR /app

COPY ./repos/portfolio-svelte/package.json ./

RUN npm install

COPY ./repos/portfolio-svelte .

EXPOSE 3100

