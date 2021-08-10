DROP DATABASE IF EXISTS br_loyalty;

CREATE DATABASE IF NOT EXISTS br_loyalty;

USE br_loyalty;

CREATE TABLE employee_name(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY ,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE rewards(
  id INT NOT NULL PRIMARY KEY,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cards(
  id INT NOT NULL PRIMARY KEY,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);