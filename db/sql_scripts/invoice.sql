-- Drop the 'invoice' table if it already exists
DROP TABLE IF EXISTS invoice;

-- Create the 'invoice' table
CREATE TABLE IF NOT EXISTS invoice (
    invoiceId INT AUTO_INCREMENT PRIMARY KEY, -- Changed to INT and added AUTO_INCREMENT
    billNo INT, -- Assuming billNo references billId in the 'bills' table
    payId INT,
    balance INT,
    amountPaid INT,
    billDate DATE,
    status ENUM('paid', 'pending') NOT NULL, -- Changed to ENUM with allowed values
    customerId INT,
    servedBy INT,
    FOREIGN KEY (customerId) REFERENCES customer(customerId),
    FOREIGN KEY (servedBy) REFERENCES adminLogin(userId),
    FOREIGN KEY (payId) REFERENCES payment(payId),
    FOREIGN KEY (billNo) REFERENCES bills(billId) -- Assuming billNo references billId in the 'bills' table
);
