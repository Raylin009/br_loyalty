const mysql = require('./db_mysql.js');

const addReward = (employee_id, time) => {
  
};

const addCard = (employee_id, time) => {

};

const addEmployee = (employee_id, employee_name) => {

};

const rmReward = (reward_id) => {

};

const rmCard = (card_id) => {

};

const rmEmployee = (employee_id) => {

};

const getEmployeeName = (employee_id, cb) => {
  mysql.query(`SELECT name FROM employee_name WHERE id=${employee_id};`, (err, res, fields) => {
    if(err){
      cb(err);
    }else{
      cb(res)
    }
    // console.log(JSON.parse(JSON.stringify(res)))
  })
};

getEmployeeName(3277923, console.log)

const getEmployeeId = (employee_name) => {

};


const getCardByDate = (date) => {

};

const getCardByEmployee = (employee_id) => {

};