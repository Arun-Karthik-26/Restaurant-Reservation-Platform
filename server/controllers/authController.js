import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connection from "../config/db.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// User Registration
export const registerUser = async (req, res) => {
  const { username, email, phone, password } = req.body;

  if (!username || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    // Check if user already exists
    const checkUserQuery = "SELECT * FROM users WHERE email = ?";
    connection.query(checkUserQuery, [email], async (err, result) => {
      if (err) return res.status(500).json({ message: "Database error", error: err });

      if (result.length > 0) return res.status(400).json({ message: "Email already in use" });

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user into DB
      const insertUserQuery = "INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)";
      connection.query(insertUserQuery, [username, email, phone, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });

        res.status(201).json({ message: "User registered successfully!" });
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// User Login
export const loginUser = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  let user="";
  try {
    // Check if user exists
    const checkUserQuery = "SELECT * FROM users WHERE email = ?";
    connection.query(checkUserQuery, [email], async (err, result) => {
      if (err) return res.status(500).json({ message: "Database error", error: err });

      if (result.length === 0) 
      {
        const checkUserQuery = "SELECT * FROM users WHERE username = ?";
        connection.query(checkUserQuery, [email], async (err, resu) => {
        if (err) return res.status(500).json({ message: "Database error", error: err });
        if(resu.length === 0)
        {
        return res.status(400).json({ message: "User not found" });
        }
        user = resu[0];
        });
      }
      else
      {
       user = result[0];
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

      // Generate token
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

      res.status(200).json({ message: "Login successful", token, user });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
