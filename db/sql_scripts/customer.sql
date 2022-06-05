-- Drop the 'customer' table if it already exists
DROP TABLE IF EXISTS customer;

-- Create the 'customer' table
CREATE TABLE IF NOT EXISTS customer (
    customerId INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL, -- Change data type to VARCHAR(50)
    surname VARCHAR(50) NOT NULL, -- Change data type to VARCHAR(50)
    siteId INT NOT NULL, -- Change data type to VARCHAR(255)
    email VARCHAR(100), -- Adjust maximum length as needed
    meterId INT NOT NULL, -- Change data type to VARCHAR(50)
    customerType ENUM('Prepaid', 'Postpaid') CHECK (customerType IN ('Prepaid', 'Postpaid')) NOT NULL, -- Change to ENUM with CHECK constraint
    dateCreated DATE, -- Use DATE data type for 'dateCreated'
    FOREIGN KEY (meterId) REFERENCES meter(meterId), -- Replace 'meter' with the actual table name
    FOREIGN KEY (siteId) REFERENCES site(siteId) -- Replace 'site' with the actual table name
);
