import React, { useState } from "react";

const UrunIslemler = ({ onAddProduct }) => {
    const [productData, setProductData] = useState({
        urun_id: "",
        urun_ad: "",
        urun_açıklama: "",
        stok: "",
        fiyat: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ürün ekleme fonksiyonunu çağırarak, gelen verileri AdminUrunler bileşenine iletiyoruz
        onAddProduct(productData);
    };

    return (
        <div className="">
            <form 
                onSubmit={handleSubmit}
                className="max-w border-2 p-4 my-4">
                <div className="mb-5">
                    <label htmlFor="ad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ürün Adı</label>
                    <input 
                        type="text" 
                        name="urun_ad"
                        onChange={handleChange}
                        id="ad" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Ürün adı giriniz." 
                        required />
                </div>
                <div className="mb-5">
                    <label htmlFor="açıklama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ürün Açıklaması</label>
                    <input 
                        type="text" 
                        name="urun_aciklama"
                        onChange={handleChange}
                        id="açıklama" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Ürün açıklaması giriniz." 
                        required />
                </div>
                <div className="mb-5">
                    <label htmlFor="stok" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ürün Stok</label>
                    <input 
                        type="number" 
                        name="stok"
                        onChange={handleChange}
                        id="stok" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Ürün stok sayısını giriniz." 
                        required />
                </div>
                <div className="mb-5">
                    <label htmlFor="fiyat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ürün Fiyat</label>
                    <input 
                        type="text" 
                        name="fiyat"
                        onChange={handleChange}
                        id="stok" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Ürün fiyatını giriniz." />
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-40 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ürün Ekle</button>
                </div>
            </form>
        </div>
    )
}

export default UrunIslemler;