-- Drop the 'userLogin' table if it already exists
DROP TABLE IF EXISTS userLogin;

-- Create the 'userLogin' table
CREATE TABLE IF NOT EXISTS userLogin (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL, -- Changed data type to VARCHAR(100) for email
    pass VARCHAR(50) NOT NULL
);

-- Add a foreign key reference from the 'customer' table to 'userLogin'
ALTER TABLE customer
ADD COLUMN loginId INT,
ADD FOREIGN KEY (loginId) REFERENCES userLogin(userId);
