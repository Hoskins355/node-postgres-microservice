import pool from "../db.js";

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, email FROM users LIMIT 10;");
    res.json(result.rows);
  } catch (err) {
    console.error("❌ Error fetching users:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
