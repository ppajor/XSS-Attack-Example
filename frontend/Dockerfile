FROM node:20-alpine3.16 as build
WORKDIR /app
ENV PATH /frontend/app/node_modules/.bin:$PATH
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install react-scripts@3.4.1 -g
COPY . /app/
RUN npm run build