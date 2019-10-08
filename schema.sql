DROP DATABASE IF EXISTS `blockchain_db`;
CREATE DATABASE `blockchain_db`;

USE `blockchain_db`;

CREATE TABLE `blocks` (
  `index` Int(10) NOT NULL AUTO_INCREMENT,
  `previousHash` VARCHAR(50) NOT NULL,
  `timestamp` VARCHAR(50) NOT NULL,
  `transaction` VARCHAR(50) NOT NULL,
  `hash` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`index`)
);

CREATE TABLE `customers` (
  `item_id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `quantityOwned` INTEGER(10) NOT NULL,
  PRIMARY KEY (`item_id`)
);