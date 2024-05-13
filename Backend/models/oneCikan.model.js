const mongoose = require('mongoose');

const OneCikanUrunlerSchema = mongoose.Schema(
    {
        urun_ad: {
            type: String,
            required: [true, "Lütfen bir ürün adı giriniz."],
        },
        urun_aciklama: {
            type: String,
            required: [true, "Lütfen bir ürün açıklaması giriniz."],
        },
        fiyat: {
            type: Number,
            required: false,
            default: 0,
        },
        stok: {
            type: Number,
            required: [true, "Lütfen ürün stoku giriniz"],
            default: 0,
        },
        son_guncelleme: {
            type: Date,
            required: false,
            default: new Intl.DateTimeFormat('tr-TR', {
                dateStyle: 'short',
                timeStyle: 'short',
                timeZone: 'Europe/Istanbul',
            }).format(new Date()),
        },
    }
)

const One_Cikan_Urunler = mongoose.model("One_Cikan_Urunler", OneCikanUrunlerSchema, "One_Cikan_Urunler");
module.exports = One_Cikan_Urunler;