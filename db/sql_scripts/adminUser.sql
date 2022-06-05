DROP TABLE IF EXISTS adminUser;

-- Create the 'userLogin' table
CREATE TABLE IF NOT EXISTS userLogin (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL
);
