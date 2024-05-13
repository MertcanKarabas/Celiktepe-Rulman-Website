const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Lütfen kullanıcı giriniz."],
        },
        password: {
            type: String,
            required: [true, "Lütfen şifre giriniz."],
        },
    }
)

const Admin = mongoose.model("Admin", AdminSchema, "Admin");
module.exports = Admin;