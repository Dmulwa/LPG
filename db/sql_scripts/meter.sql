-- Drop the 'meter' table if it already exists
DROP TABLE IF EXISTS meter;

-- Create the 'meter' table
CREATE TABLE IF NOT EXISTS meter (
    meterId INT AUTO_INCREMENT PRIMARY KEY,
    meterNo VARCHAR(50) NOT NULL, -- Changed data type to VARCHAR(50) for meterNo
    siteId INT, -- Keep it as INT if siteId is an INT in the 'site' table
    meter_type VARCHAR(50) NOT NULL, -- Changed data type to VARCHAR(50) for meter_type
    dateCreated DATE,
    created_by INT NOT NULL,
    FOREIGN KEY (siteId) REFERENCES site(siteId), -- Replace 'site' with the actual table name
    FOREIGN KEY (created_by) REFERENCES adminLogin(userId) -- Replace 'adminUser' with the actual table name
);
