FROM node:10.9.0

VOLUME ["/usr/local/lib/node_modules"]

RUN apt update && apt install -y make gcc g++ libc-dev libpng-dev python

WORKDIR /app

COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .