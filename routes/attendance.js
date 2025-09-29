const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.post("/checkin", async (req, res) => {
  const { userId } = req.body;
  await pool.query("INSERT INTO attendance (user_id, time) VALUES ($1, NOW())", [userId]);
  res.json({ message: "Điểm danh thành công" });
});

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM attendance ORDER BY time DESC");
  res.json(result.rows);
});

module.exports = router;
