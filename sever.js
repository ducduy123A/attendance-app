const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// phục vụ file tĩnh (frontend nếu có)
app.use(express.static(path.join(__dirname, "public")));

// route test
app.get("/", (req, res) => {
  res.send("Attendance app is running 🚀");
});

// start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
