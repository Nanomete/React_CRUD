// import ใน node.js ต้องใช้ require แทน import (ประกาศตัวแปรแบบ const)
const express = require("express");
const { readdirSync } = require("fs"); // fs = file system (โมดูลจัดการไฟล์ในเครื่องเรา)
const morgan = require("morgan"); // โมดูลสำหรับดู log การเรียกใช้งาน API
const cors = require("cors"); // โมดูลสำหรับจัดการ CORS
const bodyParser = require("body-parser"); // โมดูลสำหรับแปลงข้อมูล request body
const connectDB = require("./Config/db");

// เชื่อมต่อฐานข้อมูล
connectDB();

// const productRouter = require("./Routes/product");
// const authRouter = require("./Routes/auth");

/**
 * สร้าง express application
 */
const app = express();

// route 1
// app.get("/product", (req, res) => {
  // req คือ request (ข้อมูลที่ client ส่งมา)
  // res คือ response (ข้อมูลที่ server ส่งกลับไปหา client)
  //   res.send("Hello endpoint >>");
  // });

app.use(morgan('dev')) // เลือก 'dev' เพราะเป็นโหมดพัฒนา
app.use(cors())
app.use(bodyParser.json({limit: '10mb'})) // สำหรับแปลงข้อมูล request body ที่เป็น JSON เป็นตัวกำหนดขนาดข้อมูล body ได้ เช่น bodyParser.json({ limit: '5mb' })


// route 2
// app.use("/api", productRouter);
// app.use("/api", authRouter);

// route 3
readdirSync('./Routes').map((res) => {
  app.use("/api", require(
    './Routes/' + res
  ));
})

/**
 * listen(port, callback)
 * ----------------------------------
 * สร้าง server ที่รันบน port 5000
 */
app.listen(5000, () => {
  console.log("Server run complete on port 5000");
});

/**
 * วิธี run server
 * ----------------------------------
 * 1. เปิด terminal ขึ้นมา
 * 2. รันคำสั่ง `node server.js` หรือ `node server` (server คือชื่อไฟล์)
 */
