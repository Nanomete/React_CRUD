const mongoose = require('mongoose')
// เปรียบเสมือนการสร้างตาราง (table) ในฐานข้อมูล relational database เช่น MySQL, PostgreSQL
/**
 * Build Fields(columns) for Product Collection
 */
const productSchema = mongoose.Schema({
    name:String, // ปรับแต่งได้น้อยกว่าอันที่มี {}
    detail:{
        type: String,
    },
    price:{
        type: Number,
    }
},{timestamps:true}) // timestamp คือสร้างเวลาให้อัตโนมัติเมื่อมีการสร้างหรือแก้ไขข้อมูล

module.exports = mongoose.model('products', productSchema)