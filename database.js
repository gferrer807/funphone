const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Blunderb33!',
  database : 'mvp'
});

connection.connect();

module.exports = {
  getContacts: () => {
    connection.query('select * from contacts', function (error, results, fields) {
      if (error) {throw error} 
      else {
        console.log('results', results);
        return results;
      }
    });
  },
  getMessages: () => {
    connection.query('select * from messages', function (error, results, fields) {
      if (error) throw error;
      return results;
    });
  }
}