const express = require('express');
const router = express.Router();
const { deleteUrunler, getUrunler, postUrunler, putUrunler, getOneCikanUrunler, getAdmin } = require('../controllers/product.controller.js');

router.get('/', getUrunler);
router.get('/one-cikan-urunler', getOneCikanUrunler);
router.post('/', postUrunler);
router.put('/:id', putUrunler);
router.delete('/:id', deleteUrunler);
router.get('/admin', getAdmin);

module.exports = router;