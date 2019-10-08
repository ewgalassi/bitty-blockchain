DROP DATABASE IF EXISTS `blockchain`;
CREATE DATABASE `blockchain`;

USE `blockchain`;

CREATE TABLE `blocks` (
  `index` INTEGER(10) NOT NULL AUTO_INCREMENT,
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