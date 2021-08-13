/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to execute the queries in this file.
 */

DROP DATABASE IF EXISTS br_loyalty;

CREATE DATABASE IF NOT EXISTS br_loyalty;

USE br_loyalty;

CREATE TABLE employee_name(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY ,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE rewards(
  id INT AUTO_INCREMENT NOT NULL UNIQUE KEY,
  employee_id INT NOT NULL,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP PRIMARY KEY
);

CREATE TABLE cards(
  id INT AUTO_INCREMENT NOT NULL UNIQUE KEY,
  employee_id INT NOT NULL,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP PRIMARY KEY
);