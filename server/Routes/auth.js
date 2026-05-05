const express = require("express");
const router = express.Router();

router.get("/auth", (req, res) => {
  // req คือ request (ข้อมูลที่ client ส่งมา)
  // res คือ response (ข้อมูลที่ server ส่งกลับไปหา client)
  res.send("Hello endpoint >> auth");
});

module.exports = router;
