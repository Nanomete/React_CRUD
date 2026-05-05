const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // 127.0.0.1 คือ localhost (เครื่องตัวเอง)
        await mongoose.connect('mongodb://127.0.0.1:27017/productdb')
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;