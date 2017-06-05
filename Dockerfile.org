FROM node:latest
RUN npm install -g express-generator
WORKDIR /root/
RUN express learn_express
WORKDIR /root/learn_express
RUN npm install
