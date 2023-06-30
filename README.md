
# Rick & Morty App

An app that displays characters of the Rick & Morty animated series. The character information is obtained from a public api and is later managed and rendered in the back end and front end of the app.

## Features

- Authentication
- Favorites
- Search
- Filtering and ordering of data
- Database
- CRUD operations
- REST API requests



## Tech Stack

**Client:** React, Redux, Next JS, CSS Modules

**Server:** JavaScript, Node JS, Express

**Database:** PostgreSQL, Sequelize


## Screenshots

**Login**

<img src="./img/LoginGIF.gif" alt="" width="384" height="216" />

**Search Characters**

<img src="./img/SearchGIF.gif" alt="" />

**Favorites**

<img src="./img/FavoritesGIF.gif" alt="" />

**Character Detail**

<img src="./img/DetailGIF.gif" alt="" width="384" height="216" />

## Installation

1.- Clone the repo.

```bash
  git clone https://github.com/SGrommelt/Rick-And-Morty.git
```

2.- From the main folder, move to "client" directory and install dependencies.

```bash
  cd client
  npm install
```

3.- From the main folder, move to "source" directory and install dependencies.

```bash
  cd server
  npm install
```

4.- Create a local database named "rickandmorty". Create a .env file in the "src" folder inside the source directory and add the following code:

```bash
    DB_USER= // Insert username here
    DB_PASSWORD= // Insert password here
    DB_HOST=localhost
```

5.- Run npm start in the terminal, located at the "source" directory. Next, run this command again located in the "client" directory.

```bash
    npm start
```
    
## Running Tests

To run tests, open terminal in the "server" directory and run the following command.

```bash
  npm test
```
