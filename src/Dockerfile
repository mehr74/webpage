FROM node:21-alpine3.18

LABEL MAINTAINER="Mehrshad Lotfi <mehrshad@mehrshad.io>"

WORKDIR /usr/src

COPY ["package.json", "."]

RUN npm install

COPY [".", "/usr/src"]

RUN npm run build

CMD ["npm", "run", "start"]