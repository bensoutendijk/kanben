FROM node:16 AS development

WORKDIR /app

FROM development as build

RUN yarn build