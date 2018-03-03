CREATE DATABASE wedding_db;
USE wedding_db;

<<<<<<< HEAD
CREATE TABLE wedding (
`id` INTEGER(10) AUTO_INCREMENT NOT NULL,
`gift_name` VARCHAR(255) NOT NULL,
`reserved` BOOLEAN DEFAULT FALSE NOT NULL,
`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
=======
-- Create a burgers table with the required fields --
CREATE TABLE wedding_gifts
(
    id int NOT NULL AUTO_INCREMENT,
    gift_name varchar(255) NOT NULL,
    reserved BOOLEAN DEFAULT false,
     dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     PRIMARY KEY(id)
>>>>>>> b1a05e9969c28972b13c643f3155d1f21ee083c9
);