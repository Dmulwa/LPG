CREATE DATABASE IF NOT EXISTS lpg;

-- Use the 'lpg' database
USE lpg;

-- Drop the 'adminLogin' table if it already exists
DROP TABLE IF EXISTS adminLogin;

-- Create the 'adminLogin' table
CREATE TABLE IF NOT EXISTS adminLogin (
    userId INT AUTO_INCREMENT PRIMARY KEY, -- Use AUTO_INCREMENT for the primary key
    firstName VARCHAR(50),
    surname VARCHAR(50),
    phone VARCHAR(50),
    email VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL
);

