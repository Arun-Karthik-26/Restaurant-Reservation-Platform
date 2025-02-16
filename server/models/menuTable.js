import dotenv from "dotenv";
import connection from "../config/db.js"; // Make sure the path is correct

dotenv.config({path : "../.env"}); // Load environment variables
console.log("DB Config: on model", process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);

const createMenuTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100),
    image_url VARCHAR(255) NOT NULL
);

  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("❌ Error creating users table:", err);
    } else {
      console.log("✅ menu table created or already exists.");
    }
    connection.end(); // Close connection after query
  });
};

// Call the function to create the table
createMenuTable();
