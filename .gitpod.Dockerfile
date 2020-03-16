FROM node:alpine

RUN yarn global add vuepress \
    && export PATH=$PATH:$HOME/.yarn/bin
