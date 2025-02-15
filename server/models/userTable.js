import dotenv from "dotenv";
import connection from "../config/db.js"; // Make sure the path is correct

dotenv.config(); // Load environment variables
console.log("DB Config: on model", process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);

const createUsersTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,
      email VARCHAR(100) NOT NULL UNIQUE,
      phone VARCHAR(15) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      profile_pic VARCHAR(255) DEFAULT NULL,
      address TEXT DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("❌ Error creating users table:", err);
    } else {
      console.log("✅ Users table created or already exists.");
    }
    connection.end(); // Close connection after query
  });
};

// Call the function to create the table
createUsersTable();
