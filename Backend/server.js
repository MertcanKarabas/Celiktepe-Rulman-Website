const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const productRoutes = require('./routes/product.routes.js');
const app = express();
require('dotenv').config();

//Middleware
app.use(bodyParser.json()); // JSON verilerini işlemek için bodyParser middleware'ini kullanıyoruz
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: 'https://celikteperulman.com'
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://celikteperulman.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Routes
app.use("/api/urunler", productRoutes)

//MongoDB Bağlantısı
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@celiktepe-rulman.ykxtob0.mongodb.net/celiktepe-rulman?retryWrites=true&w=majority&appName=celiktepe-rulman`;
mongoose.connect(uri)
    .then(() => console.log("DB'ye bağlandı."))
    .catch(() => console.log("DB'ye bağlanırken hata oluştu."));


const port = process.env.PORT;
const options = {
    key: fs.readFileSync('./certificates/private.key'),
    cert: fs.readFileSync('./certificates/certificate.crt'),
    ca: fs.readFileSync('./certificates/ca_bundle.crt')
}

https.createServer(options, app).listen(port, () => {
    console.log(`Server ${port} portunda çalışıyor.`);
})