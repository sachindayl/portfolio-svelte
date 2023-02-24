FROM node:18-alpine

WORKDIR /app

COPY ./repos/portfolio-svelte/package.json ./

EXPOSE 3100
