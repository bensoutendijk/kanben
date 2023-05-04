FROM node:20-alpine AS development

WORKDIR /app

FROM development as build

RUN yarn build