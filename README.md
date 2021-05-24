# Noon Blog App

# Introduction

This is a simple MERN stack app that allow the user to create and read simple blogs. mainly the perpous of this app is to practice dockerizing react and node-express app using docker-compose.
<br/>




## To Start the App: 
---------------------

Download

```
$ git clone https://github.com/maysqunaibi/Noor-Blog-App.git
```

### Configuring App

If you have all the prerequisites installed you should verify if your MongoDB is up.

```bash
$ cd Noor-Blog-App
$ cd server
$ npm install
$ nodemon index.js
```

```bash
$ cd Noor-Blog-App
$ cd client
$ npm install
$ npm start
```

Docker
If you have docker installed run the following in the terminal:
```bach
$ cd Noor-Blog-App
$ docker build -t 'api-server' ./server
$ docker build -t 'react-app' ./client
$ docker-compose up
```
![Header](https://imgur.com/c934HdY.png)

![Creat Blog](https://imgur.com/56XmG0D.png)

![List Blog](https://imgur.com/NpekmpZ.png)