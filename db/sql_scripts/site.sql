-- Create the 'lpg' database if it does not exist
CREATE DATABASE IF NOT EXISTS lpg;

-- Use the 'lpg' database
USE lpg;

-- Drop the 'site' table if it already exists
DROP TABLE IF EXISTS site;

-- Create the 'site' table
CREATE TABLE site (
    siteId INT AUTO_INCREMENT PRIMARY KEY,
    addr VARCHAR(255) NOT NULL, -- Changed data type to VARCHAR(255)
    phone VARCHAR(20) NOT NULL, -- Adjust maximum length as needed
    email VARCHAR(50), -- Adjust maximum length as needed
    city VARCHAR(50) NOT NULL, -- Adjust maximum length as needed
    dateCreated DATE,
    created_by INT NOT NULL,
    FOREIGN KEY (created_by) REFERENCES adminLogin(userId) -- Replace 'adminLogin' with the actual table name
);
