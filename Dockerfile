FROM node:latest
RUN npm install -g create-react-app
WORKDIR /root/
RUN create-react-app learn_create_react_app
WORKDIR /root/learn_create_react_app
RUN npm install --save redux react-redux
RUN npm install --save-dev jest babel-jest babel-preset-es2015 babel-preset-react react-test-renderer
