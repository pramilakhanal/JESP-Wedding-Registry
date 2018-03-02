CREATE DATABASE wedding_db;
USE wedding_db;

-- Create a burgers table with the required fields --
CREATE TABLE wedding_gifts
(
    id int NOT NULL AUTO_INCREMENT,
    gift_name varchar(255) NOT NULL,
    reserved BOOLEAN DEFAULT false,
     dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     PRIMARY KEY(id)
);