FROM node:latest
RUN npm install -g create-react-app
RUN mkdir /learn_create_react_app
WORKDIR /learn_create_react_app
ADD . /learn_create_react_app
