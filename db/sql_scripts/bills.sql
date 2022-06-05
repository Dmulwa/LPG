-- Drop the 'bills' table if it already exists
DROP TABLE IF EXISTS bills;

-- Create the 'bills' table
CREATE TABLE IF NOT EXISTS bills (
    billId INT AUTO_INCREMENT PRIMARY KEY,
    meterNo VARCHAR(50), -- Change data type to VARCHAR(50)
    prevRead INT,
    currentRead INT,
    billDate DATE,
    status ENUM('paid', 'pending') NOT NULL, -- Change data type to ENUM with allowed values
    customerId INT,
    billedBy INT, -- Change data type to INT to reference the userId
    FOREIGN KEY (customerId) REFERENCES customer(customerId),
    FOREIGN KEY (billedBy) REFERENCES adminLogin(userId)
);
