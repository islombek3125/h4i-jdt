const pool = require('./db')

const createTableText ='CREATE TABLE tweets(id serial PRIMARY KEY, username VARCHAR(255) NOT NULL, content VARCHAR(255) NOT NULL, created_at VARCHAR(255) NOT NULL)';

   


pool.query(createTableText)
    .then(() => {
        console.log('Done!')
    }).catch((err) => {
        console.log("Uh Oh", err)
    })