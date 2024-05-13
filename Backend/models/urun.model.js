const mongoose = require('mongoose');

const UrunlerSchema = mongoose.Schema(
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
            type: String,
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
            default: Date.now(),
        }
    }
)

const Urunler = mongoose.model("Urunler", UrunlerSchema, "Urunler");
module.exports = Urunler;