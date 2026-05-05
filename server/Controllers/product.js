const Product = require("../Models/Product");

exports.read = async (req, res) => {
    try {
        // _id : id คือการค้นหาข้อมูลโดยใช้ id ที่ส่งมา
        // _id มาจากฐานข้อมูล MongoDB ที่สร้างให้อัตโนมัติสำหรับแต่ละเอกสาร (document)
        const id = req.params.id
        const producted = await Product.findOne({_id:id}).exec(); // ดึงข้อมูลทั้งหมดจากฐานข้อมูล
        
        res.send(producted);
    } catch (error) {
        console.log(error);
        res.status(400).send("Error, something went wrong");
    }
}

/**
 * จัดการ error ด้วย try catch
 * @param {*} req 
 * @param {*} res 
 */
exports.list = async (req, res) => {
    try {
        const producted = await Product.find({}).exec(); // ดึงข้อมูลทั้งหมดจากฐานข้อมูล
        
        res.send(producted);
    } catch (error) {
        console.log(error);
        res.status(400).send("Error, something went wrong");
    }
}

/**
 * Get method จัดการ error
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async (req, res) => {
    try {
        console.log(req.body); // ตรวจสอบข้อมูลที่ส่งมา
        const producted = await Product(req.body).save(); // บันทึกข้อมูลลงฐานข้อมูล

        res.send(producted);
    } catch (error) {
        console.log(error);
        res.status(400).send("Error, something went wrong");
    }
}

/**
 * put method จัดการ error
 * @param {*} req 
 * @param {*} res 
 */
exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const updated = await Product.findOneAndUpdate({_id:id}, req.body, {new:true}).exec()

        res.send(updated);
    } catch (error) {
        console.log(error);
        res.status(400).send("Error, something went wrong");
    }
}

/**
 * delete method จัดการ error
 * @param {*} req 
 * @param {*} res 
 */
exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        const removed = await Product.findOneAndDelete({_id:id}).exec()

        res.send(removed);
    } catch (error) {
        console.log(error);
        res.status(400).send("Error, something went wrong");
    }
}