-- Drop the 'payment' table if it already exists
DROP TABLE IF EXISTS payment;

-- Create the 'payment' table
CREATE TABLE IF NOT EXISTS payment (
    payId INT AUTO_INCREMENT PRIMARY KEY,
    transactionId VARCHAR(50), -- Changed data type to VARCHAR(50) for transactionId
    meterNo VARCHAR(50) NOT NULL,
    email VARCHAR(100), -- Adjust maximum length as needed
    amountPaid INT,
    paymentDate DATE
);
