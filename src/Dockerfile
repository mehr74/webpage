FROM node:21-alpine3.18
ARG UPSTASH_REDIS_REST_TOKEN
ARG UPSTASH_REDIS_REST_URL
ENV UPSTASH_REDIS_REST_TOKEN=$UPSTASH_REDIS_REST_TOKEN
ENV UPSTASH_REDIS_REST_URL=$UPSTASH_REDIS_REST_URL

LABEL MAINTAINER="Mehrshad Lotfi <mehrshad@mehrshad.io>"

WORKDIR /usr/src

COPY ["package.json", "."]

RUN npm install

COPY [".", "/usr/src"]

RUN npm run build

CMD ["npm", "run", "start"]