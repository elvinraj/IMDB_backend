# IMDB_backend

This project is to understand search, sort, filter, pagination in backend

# Youtube Channel and name

CyberWolves
Implement Search, Sort, Filter and Pagination Rest API With Node JS | Express | MongoDB

# Steps followed while doing this prohject

mkdir server
cd server
npm init --yes
npm i express mongoose dotenv cors nodemon

inside package.json
"main": "server.js",
"start": "nodemon server.js"

    -->server.js
    -->.env
    -->dbConnect.js

    -->models -->Movie.js
    -->routes -->movies.js

    -->config -->movies.json

npm start

Goto Postman and test the api's
http://localhost:8080/api/movies
http://localhost:8080/api/movies?page=1&limit=6&genre=Drama,Action&sort=year,desc&search=god