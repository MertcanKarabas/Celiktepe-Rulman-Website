import React, { useEffect, useState } from "react";
import UrunIslemler from "../../../Components/UrunIslemler";
import DeleteConfirmationModal from "../../../Components/DeleteConfirmationModel";
import EditModal from "../../../Components/EditModal";
import axios from "axios";
import Notification from "../../../Components/Notification";

const AdminUrunler = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [deletedUrun, setDeletedUrun] = useState(null);
    const [search, setSearch] = useState('');
    const [selectedSearch, setSelectedSearch] = useState('Urun_Ad');
    const [editedUrun, setEditedUrun] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [urunler, setUrunler] = useState([]);
    const [showSuccessAddNotification, setshowSuccessAddNotification] = useState(false);
    const [showFailedAddNotification, setshowFailedAddNotification] = useState(false);
    const [showSuccessUpdateNotification, setshowSuccessUpdateNotification] = useState(false);
    const [showSuccessDeleteNotification, setshowSuccessDeleteNotification] = useState(false);
    const [showFailedDeleteNotification, setshowFailedDeleteNotification] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');

    const ip = 'https://185.87.252.210:5001'
    const fetchUrunler = async () => {
        try {
            const response = await axios.get(`${ip}/api/urunler/`);
            let sortedUrunler = response.data;
            // Sıralama türüne göre sırala
            if (selectedSearch === 'Urun_Ad') {
                sortedUrunler.sort((a, b) => a.urun_ad.localeCompare(b.urun_ad));
            } else if (selectedSearch === 'Urun_Aciklama') {
                sortedUrunler.sort((a, b) => a.urun_aciklama.localeCompare(b.urun_aciklama));
            } else if (selectedSearch === 'Urun_Stok') {
                sortedUrunler.sort((a, b) => a.stok - b.stok);
            } else if (selectedSearch === 'Urun_Fiyat') {
                sortedUrunler.sort((a, b) => a.fiyat - b.fiyat);
            } else if (selectedSearch === 'Son_Guncelleme') {
                sortedUrunler.sort((a, b) => a.son_guncelleme - b.son_guncelleme);
            }

            // Sıralama yöntemine göre sırala
            if (sortOrder === 'desc') {
                sortedUrunler.reverse();
            }
            setUrunler(sortedUrunler);
        } catch (error) {
            console.error("Error fetching urunler:", error);
        }
    };

    useEffect(() => {
        const fetchUrunler = async () => {
            try {
                const response = await axios.get(`${ip}/api/urunler/`);
                let sortedUrunler = response.data;
                // Sıralama türüne göre sırala
                if (selectedSearch === 'Urun_Ad') {
                    sortedUrunler.sort((a, b) => a.urun_ad.localeCompare(b.urun_ad));
                } else if (selectedSearch === 'Urun_Aciklama') {
                    sortedUrunler.sort((a, b) => a.urun_aciklama.localeCompare(b.urun_aciklama));
                } else if (selectedSearch === 'Urun_Stok') {
                    sortedUrunler.sort((a, b) => a.stok - b.stok);
                } else if (selectedSearch === 'Urun_Fiyat') {
                    sortedUrunler.sort((a, b) => a.fiyat - b.fiyat);
                } else if (selectedSearch === 'Son_Guncelleme') {
                    sortedUrunler.sort((a, b) => a.son_guncelleme - b.son_guncelleme);
                }

                // Sıralama yöntemine göre sırala
                if (sortOrder === 'desc') {
                    sortedUrunler.reverse();
                }
                setUrunler(sortedUrunler);
            } catch (error) {
                console.error("Error fetching urunler:", error);
            }
        };

        fetchUrunler();
    }, [selectedSearch, sortOrder]);



    const handleSortOrderChange = (sortBy) => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);

        // Sıralama türüne göre sırala
        setSelectedSearch(sortBy);
    };

    const handleChange = (e) => {
        setSelectedSearch(e.target.value);
    };

    const handleConfirm = async () => {
        try {
            const response = await axios.delete(`${ip}/api/urunler/${deletedUrun._id}`);
            console.log(response.data);

            fetchUrunler();
            setShowConfirmation(false);
            setDeletedUrun(null);
            setshowSuccessDeleteNotification(true);
            // Bildirimi 2 saniye sonra kapat
            setTimeout(() => {
                setshowSuccessDeleteNotification(false);
            }, 2000);
        } catch (error) {
            setshowFailedDeleteNotification(true);
            // Bildirimi 2 saniye sonra kapat
            setTimeout(() => {
                setshowFailedDeleteNotification(false);
            }, 2000);
            console.error("Error deleting urun:");
        }
    };

    const handleDeleteConfirmation = (urun) => {
        setDeletedUrun(urun);
        setShowConfirmation(true);
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    const handleEdit = (urun) => {
        setEditedUrun(urun);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setEditedUrun(null);
        setShowEditModal(false);
    };

    const handleUpdate = async () => {
        handleCloseEditModal();
        fetchUrunler();
        setshowSuccessUpdateNotification(true);
        // Bildirimi 2 saniye sonra kapat
        setTimeout(() => {
            setshowSuccessUpdateNotification(false);
        }, 2000);
    };

    const handleAddProduct = async (productData) => {

        try {
            const updatedData = {
                ...productData,
                son_guncelleme: new Date()
            };
            axios.post(`${ip}/api/urunler/`, updatedData);
            fetchUrunler();
            setshowSuccessAddNotification(true);

            // Bildirimi 2 saniye sonra kapat
            setTimeout(() => {
                setshowSuccessAddNotification(false);
            }, 2000);
        } catch (error) {
            setshowFailedAddNotification(true);
            setTimeout(() => {
                setshowFailedAddNotification(false);
            }, 2000);
            console.error("Error adding product:");
        }
    };

    return (
        <div className="flex flex-row h-full bg-slate-50">
            <div className="h-full w-full">
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center mb-8">
                            <h2 className="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Ürünler</h2>
                        </div>
                        <div>
                            <UrunIslemler
                                onAddProduct={handleAddProduct}
                            />
                        </div>
                        <form className="max-w-lg mx-auto my-10">
                            <div className="flex">
                                <div className="flex">
                                    <select value={selectedSearch} onChange={handleChange} className="flex-shrink-0 z-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
                                        <option
                                            value="Urun_Ad"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Ürün Ad
                                        </option>
                                        <option
                                            value="Urun_Aciklama"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Ürün Açıklama
                                        </option>
                                        <option
                                            value="Urun_Stok"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Ürün Stok
                                        </option>
                                        <option
                                            value="Urun_Fiyat"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Ürün Fiyat
                                        </option>
                                        <option
                                            value="Son_Guncelleme"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Son Güncelleme
                                        </option>
                                    </select>
                                </div>
                                <div className="relative w-full">
                                    <input
                                        type="search"
                                        onChange={(e) => setSearch(e.target.value)}
                                        id="search-dropdown"
                                        className="block p-2.5 w-full z-0 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                        placeholder="Ürün numarası, adı veya açıklamaya göre arayın."
                                        required />
                                </div>
                            </div>
                        </form>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg z-0">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSortOrderChange('Urun_Ad')}>
                                            Ürün Adı {selectedSearch === 'Urun_Ad' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
                                        </th>
                                        <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSortOrderChange('Urun_Aciklama')}>
                                            Ürün Açıklaması {selectedSearch === 'Urun_Aciklama' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
                                        </th>
                                        <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSortOrderChange('Urun_Stok')}>
                                            Ürün Stok {selectedSearch === 'Urun_Stok' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
                                        </th>
                                        <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSortOrderChange('Urun_Fiyat')}>
                                            Ürün Fiyat {selectedSearch === 'Urun_Fiyat' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
                                        </th>
                                        <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSortOrderChange('Son_Guncelleme')}>
                                            Son Güncelleme {selectedSearch === 'Son_Guncelleme' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Aksiyon
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {urunler.filter((item) => {
                                        return (selectedSearch === 'Urun_Ad') ? (search.toLowerCase() === '') ? item : item.urun_ad.toLowerCase().includes(search.toLowerCase())
                                            : (selectedSearch === 'Urun_Aciklama') ? (search.toLowerCase() === '') ? item : item.urun_aciklama.toLowerCase().includes(search.toLowerCase()) : item
                                    }).map((urun, index) => {
                                        return (
                                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={index}>
                                                <td className="px-6 py-4">
                                                    {urun.urun_ad}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {urun.urun_aciklama}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {urun.stok}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {urun.fiyat}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {
                                                        new Intl.DateTimeFormat('tr-TR', {
                                                            dateStyle: 'short',
                                                            timeStyle: 'short',
                                                            timeZone: 'Europe/Istanbul',
                                                        }).format(new Date(urun.son_guncelleme))
                                                    }
                                                </td>
                                                <td className="px-6 py-4 space-x-2">
                                                    <button onClick={() => handleEdit(urun)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                        Düzenle
                                                    </button>
                                                    <button onClick={() => handleDeleteConfirmation(urun)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                        Sil
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {showConfirmation && (
                            <DeleteConfirmationModal
                                message="Are you sure you want to delete this item?"
                                onConfirm={handleConfirm}
                                onCancel={handleCancel}
                            />
                        )}
                        {showEditModal && editedUrun && (
                            <EditModal
                                editedUrun={editedUrun}
                                showEditModal={showEditModal}
                                onCloseEditModal={handleCloseEditModal}
                                onUpdate={handleUpdate}
                            />
                        )}
                        {showSuccessAddNotification && (
                            <Notification
                                color={"bg-green-500"}
                                message={"Ürün başarıyla eklendi."}
                            />
                        )}
                        {showSuccessUpdateNotification && (
                            <Notification
                                color={"bg-green-500"}
                                message={"Ürün başarıyla güncellendi."}
                            />
                        )}
                        {showFailedAddNotification && (
                            <Notification
                                color={"bg-red-500"}
                                message={"Ürün eklenirken hata oldu."}
                            />
                        )}
                        {showSuccessDeleteNotification && (
                            <Notification
                                color={"bg-green-500"}
                                message={"Ürün başarıyla silindi."}
                            />
                        )}
                        {showFailedDeleteNotification && (
                            <Notification
                                color={"bg-red-500"}
                                message={"Ürün silinirken bir hata ile karşılaşıldı."}
                            />
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AdminUrunler;
