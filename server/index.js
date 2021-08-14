const express = require('express')
const path = require('path');
const app = express()
const { getEmployeeName,
        getCardByDate,
        getRewardsByDate,
      } = require('../database/util');
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
  const name = await getEmployeeName(req.query.id)
  res.send(name)
})
app.get('/cards', async(req, res) => {
  //input req.query.date
  //output: arr[cards]
  console.log(req.params)
  try{
    const data = await getCardByDate(req.query.date)
    res.send(data)
  }catch(err){
    console.log(err)
    res.end()
  }
})

app.get('/rewards', async(req, res) => {
  try{
    const data = await getRewardsByDate(req.query.date)
    res.send(data)
  }catch(err){
    console.log(err)
    res.send(err)
  }
})


 
app.listen(3000)