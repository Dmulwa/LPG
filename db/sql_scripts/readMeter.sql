-- Drop the 'readMeter' table if it already exists
DROP TABLE IF EXISTS readMeter;

-- Create the 'readMeter' table
CREATE TABLE IF NOT EXISTS readMeter (
    readId INT AUTO_INCREMENT PRIMARY KEY,
    meterId INT NOT NULL, -- Change data type to VARCHAR(50)
    currentReading INT,
    previousReading INT NOT NULL,
    dateRead DATE,
    FOREIGN KEY (meterId) REFERENCES meter(meterId)
);
