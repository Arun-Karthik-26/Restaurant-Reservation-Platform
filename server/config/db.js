import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables


const connection = mysql.createConnection({
  host: process.env.DB_HOST, // Ensure this is set
  user: process.env.DB_USER, // Ensure this is set
  password: process.env.DB_PASSWORD, // Ensure this is set
  database: process.env.DB_NAME, // Ensure this is set
  port: process.env.DB_PORT || 3306, // Railway uses custom ports sometimes
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  } else {
    console.log("✅ Database connected successfully.");
  }
});

export default connection;
