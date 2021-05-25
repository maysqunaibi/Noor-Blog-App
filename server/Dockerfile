FROM node:14-slim

WORKDIR /Noor-Blog-App/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["index.js" ]