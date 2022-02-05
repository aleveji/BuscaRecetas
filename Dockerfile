FROM node:16.13.0-slim

WORKDIR /app

RUN chown -R node . && chmod 755 -R .

USER node

COPY package*.json ./

RUN npm ci

WORKDIR /app/test

ENTRYPOINT ["npm", "run", "test"]

