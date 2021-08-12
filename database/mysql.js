var mysql = require('mysql')
var connection = mysql.createConnection({
  user: 'root',
  database: 'br_loyalty'
})

connection.connect()

connection.query('SELECT * FROM employee_name;', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', JSON.parse(JSON.stringify(rows)))
})

connection.end()
