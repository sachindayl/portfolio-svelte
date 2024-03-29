FROM node:20-alpine AS builder

RUN npm i -g npm

RUN npm i -g vite

WORKDIR /app

COPY ./repos/portfolio-svelte/package.json ./

COPY ./repos/portfolio-svelte/package-lock.json ./

RUN npm ci

COPY ./repos/portfolio-svelte .

RUN npm run build

FROM node:20-alpine

USER node:node

WORKDIR /app

COPY --from=builder --chown=node:node /app/build ./build

COPY --from=builder --chown=node:node /app/node_modules ./node_modules

COPY --from=builder --chown=node:node /app/package.json .

EXPOSE 3100

ENV HOST=0.0.0.0 PORT=3100 NODE_ENV=production

CMD ["node","build"]
