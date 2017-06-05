FROM node:latest
RUN npm install -g create-react-app
WORKDIR /root/
RUN create-react-app learn_create_react_app
WORKDIR /root/learn_create_react_app
