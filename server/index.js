const express = require('express')
const path = require('path');
const app = express()
const {getEmployeeNameP} = require('../database/util');
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// app.get('', function (req, res) {
//   res.send('Hello World')
// })

app.get('/employee_name', async(req, res) => {
  //require employee_id req.query.id
  //return name or nothing
  // getEmployeeName(req.query.id, res.send)
  const name = await getEmployeeNameP(3277923)
  res.send(name)
  
  // res.send("tested")
})

 
app.listen(3000)