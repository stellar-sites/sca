FROM node:alpine

RUN yarn add global vuepress && export PATH=$PATH:$HOME/.yarn/bin

