FROM node:18-alpine AS builder

RUN npm i -g vite

WORKDIR /app

COPY ./repos/portfolio-svelte/package.json ./

RUN npm install

RUN npm ci

COPY ./repos/portfolio-svelte .

RUN npm run build && npm prune --production

EXPOSE 3100


