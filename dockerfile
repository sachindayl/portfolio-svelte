FROM node:18-alpine

WORKDIR /app

COPY ./repos/portfolio-svelte/package.json ./

RUN npm install

COPY ./repos/portfolio-svelte .

RUN npm ci --prod

EXPOSE 3100

CMD echo pwd

CMD npm build
