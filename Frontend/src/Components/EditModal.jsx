import axios from "axios";
import React, { useState } from "react";
import Notification from "./Notification";

const EditModal = ({ editedUrun, showEditModal, onCloseEditModal, onUpdate }) => {
    const [editedData, setEditedData] = useState(editedUrun);
    const [showFailedUpdateNotification, setshowFailedUpdateNotification] = useState(false);
    const ip = 'https://185.87.252.210:5001'
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            //console.log(editedUrun)
            const updatedData = {
                ...editedData,
                son_guncelleme: new Date()
            };
            await axios.put(`${ip}/api/urunler/${editedUrun._id}`, updatedData);
            onUpdate(updatedData);
            onCloseEditModal();

        } catch (error) {
            setshowFailedUpdateNotification(true);
            setTimeout(() => {
                setshowFailedUpdateNotification(false);
            }, 2000);
            console.error("Error updating urun:");
        }
    };
    return (
        <>
            {showEditModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white w-96 rounded-lg shadow-lg p-6">
                        <h2 className="text-lg font-medium mb-4">Ürünü Düzenle</h2>
                        <input
                            type="text"
                            name="urun_ad"
                            value={editedData.urun_ad}
                            onChange={handleChange}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Ürün Adı"
                        />
                        <input
                            type="text"
                            name="urun_aciklama"
                            value={editedData.urun_aciklama}
                            onChange={handleChange}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Ürün Açıklaması"
                        />
                        <input
                            type="number"
                            name="stok"
                            value={editedData.stok}
                            onChange={handleChange}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Stok Miktarı"
                        />
                        <input
                            type="text"
                            name="fiyat"
                            value={editedData.fiyat}
                            onChange={handleChange}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded-lg"
                            placeholder="Fiyatı"
                        />
                        <div className="flex justify-end">
                            <button onClick={onCloseEditModal} className="mr-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">İptal</button>
                            <button onClick={handleUpdate} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Güncelle</button>
                        </div>
                    </div>
                    {showFailedUpdateNotification && (
                        <Notification
                            color={"bg-red-500"}
                            message={"Ürün eklenirken hata oldu."}
                        />
                    )}
                </div>
            )}
        </>
    );
}

export default EditModal;
