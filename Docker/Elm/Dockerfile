FROM node:10.13-alpine

# Install Npm
RUN \
    mkdir -p /opt/app/assets && \
    chmod -R 777 /opt/app/assets && \
    apk update && \
    apk --no-cache --update add \
      nodejs nodejs-npm && \
    rm -rf /var/cache/apk/*
# Add local node module binaries to PATH
ENV PATH=./node_modules/.bin:$PATH \
    HOME=/opt/app/assets

WORKDIR /opt/app/assets