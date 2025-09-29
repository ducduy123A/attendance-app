const express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const { Server } = require("socket.io");

const authRoutes = require("./routes/auth");
const attendanceRoutes = require("./routes/attendance");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);

io.on("connection", (socket) => {
  console.log("Người dùng kết nối:", socket.id);

  socket.on("disconnect", () => {
    console.log("Người dùng rời:", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server chạy tại cổng ${PORT}`);
});