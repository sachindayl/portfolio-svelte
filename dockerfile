FROM node:18-alpine AS builder

RUN npm i -g vite

WORKDIR /app

COPY ./repos/portfolio-svelte/package.json ./

RUN npm install

RUN npm ci

COPY ./repos/portfolio-svelte .

RUN npm run build && npm prune --production

FROM node:18-alpine

USER node:node

WORKDIR /app

COPY --from=builder --chown=node:node /app/build ./build

COPY --from=builder --chown=node:node /app/node_modules ./node_modules

COPY --from=builder --chown=node:node /app/package.json .

EXPOSE 3100

CMD ["node","build"]
