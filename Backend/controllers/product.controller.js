const UrunModel = require('../models/urun.model.js');
const One_Cikan_Urunler = require('../models/oneCikan.model.js')
const AdminModel = require('../models/adminModel.js');

const getAdmin = async (req, res) => {
    try {
        const admin = await AdminModel.find({});
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getUrunler = async (req, res) => {
    try {
        const Urunlers = await UrunModel.find({});
        res.status(200).json(Urunlers);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOneCikanUrunler = async (req, res) => {
    try {
        const Urunlers = await One_Cikan_Urunler.find({});
        res.status(200).json(Urunlers);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const postUrunler = async (req, res) => {
    try {
        const Urunler = await UrunModel.create(req.body)
        res.status(200).json(Urunler)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const putUrunler = async (req, res) => {
    try {
        const { id } = req.params;
        const Urunler = await UrunModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!Urunler)
            return res.status(404).json({ message: "Ürün bulunamadı" });
        const updatedUrunler = await UrunModel.findById(id);
        res.status(200).json(updatedUrunler);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteUrunler = async (req, res) => {
    try {
        const { id } = req.params;
        const Urunler = await UrunModel.findByIdAndDelete(id);
        if (!Urunler)
            return res.status(404).json({ message: "Ürün bulunamadı" });
        res.status(200).json({ message: "Ürün başarıyla silindi" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getUrunler,
    postUrunler,
    putUrunler,
    deleteUrunler,
    getOneCikanUrunler,
    getAdmin
}