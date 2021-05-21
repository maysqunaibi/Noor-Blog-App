FROM node:14-slim

WORKDIR /movies-app/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]