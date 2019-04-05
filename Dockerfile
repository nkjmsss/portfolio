FROM node:11.9.0-alpine
RUN apk update \
    && npm i -g npm \
    && npm i -g @vue/cli
VOLUME [ "/src" ]
WORKDIR /src
