FROM node:18-alpine

WORKDIR /app

COPY ./repos/portfolio-svelte/package.json ./

RUN npm install

COPY ./repos/portfolio-svelte .

RUN npm ci --omit=dev

EXPOSE 3100

RUN echo pwd

RUN npm build
