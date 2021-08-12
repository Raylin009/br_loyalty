var mysql = require('mysql')
var connection = mysql.createConnection({
  user: 'root',
  database: 'br_loyalty'
})

connection.connect((err) => {
  if(err){
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// connection.query('SELECT * FROM employee_name;', function (err, rows, fields) {
//   if (err) throw err
//   // console.log(fields)
//   console.log('The solution is: ', JSON.parse(JSON.stringify(rows)))
// })

module.exports = connection;

// connection.end()
