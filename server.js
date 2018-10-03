const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_QUERY = 'SELECT * FROM user';

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'zKai1988!',
  database: 'react-sql'
});

connection.connect(err => {
    if(err) {
      return err;
    }
});

console.log(connection);

app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /products to see products')
});

app.get('/add', (req, res) => {
  const {userID, password, name, email, birthday, sex} = req.query;
  const INSERT_QUERY = "INSERT INTO user(`uid`, `password`, `name`, `email`, `birthday`, `sex`) VALUES ('kai', 'kkk', 'Joel K. Zhou', 'zk@pokeworld.com', '1980-01-01', 'M')";
  connection.query(INSERT_QUERY, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('Successfully added entry')
      }
  });
});

app.get('/products', (req, res) => {
  connection.query(SELECT_ALL_QUERY, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});

app.listen(4000, () => {
    console.log('Products server listening on port 4000')
});
