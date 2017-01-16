var pg = require('pg');

var config = {
  user: 'postgres',
  database: 'Node1912',
  password: 'khoapham',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 1000
};

var pool = new pg.Pool(config);

// pool.connect((err, client, done) => {
//
//   if(err) return console.log('Loi: ' + err);
//   console.log('Ket nối thanh cong');
//   done();
//
//   client.query(`INSERT INTO "User"(username, password, fullname, phone)
//   VALUES ('huong1', '321', 'Nguyen Huong', '0934827348') RETURNING *`,
//   (err, result) => {
//     if(err) return console.log('Loi ' + err);
//     console.log(result);
//   });
//
// });

function query(sql, cb){
  pool.connect((err, client, done) => {
    if(err) return console.log('Loi: ' + err);
    done();
    client.query(sql,(err, result) => {
      if(err) return console.log('Loi ' + err);
      //console.log(result.rows);
      cb(result);
    });
  });
}

// query('SELECT * FROM "User"',
// (result) => console.log(result.rows));

query('DELETE FROM "User" WHERE id = 5',
(result) => console.log(result.rowCount));
