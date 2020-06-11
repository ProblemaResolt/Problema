FROM node:alpine
RUN mkdir -p /opt/app
RUN npm init -y

# dev-dependencies
RUN yarn add --dev elm
RUN yarn add --dev elm-verify-examples

RUN yarn global add create-elm-app@3.2.1
RUN yarn global add elm-verify-examples@4.0.0

RUN yarn global add elm-format@0.8.2
RUN yarn global add elm-analyse@0.16.4

ENV ELM_DEBUGGER=true

ENV HOST 0.0.0.0
EXPOSE 8000

WORKDIR /opt/app/assets