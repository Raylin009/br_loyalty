const mysql = require('./db_mysql.js');

const addReward = (employee_id, time, cb) => {
  mysql.query(`INSERT INTO rewards (employee_id) VALUES (${employee_id});`, (err, res, fields) => {
    if(err){
      cb(err);
    }else{
      cb(res)
    }
  })
};
// addReward(3277923, null, console.log)

const addCard = (employee_id, time, cb) => {
  mysql.query(`INSERT INTO cards (employee_id) VALUES (${employee_id});`, (err, res, fields) => {
    if(err){
      cb(err);
    }else{
      cb(res)
    }
  })
};

// addCard(3277923, null, console.log)

const addEmployee = (id, name, cb) => {
  mysql.query(`INSERT IGNORE INTO employee_name (id, name) VALUES (?, ?);`,[id, name], (err, res, fields) => {
    if(err){
      cb(err);
    }else{
      cb(res);
    }
  })
};
// addEmployee('23', "life", console.log)


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

// getEmployeeName(3277923, console.log)

const getEmployeeId = (employee_name, cb) => {
  mysql.query(`SELECT id FROM employee_name WHERE name='${employee_name}'`, (err, res, fields) => {
    if(err){
      cb(err);
    }else{
      cb(res);
    }
  })
};

// getEmployeeId('Ray', console.log) 

const getCardByDate = (dateStr, cb) => {
  const dateStrRule = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;
  if(dateStrRule.test(dateStr)){
    mysql.query(`SELECT * FROM cards WHERE ts BETWEEN '${dateStr} 00:00:00' AND '${dateStr} 23:59:59'`, (err, res, fields) => {
      err ? cb(err) : cb(res);
    })
  }else{
    cb(Error('dateStr have to be in "yyyy-mm-dd" formate'))
  }
};
getCardByDate('2021-08-130', console.log)

const getCardByEmployee = (employee_id) => {

};