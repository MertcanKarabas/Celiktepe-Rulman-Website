const UrunEkle = () => {
    return (
        <form class="max-w border-2 p-4 my-4">
            <div class="mb-5">
                <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ürün Numarası</label>
                <input type="number" id="id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ürün numarası giriniz." required />
            </div>
            <div class="mb-5">
                <label for="ad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ürün Adı</label>
                <input type="text" id="ad" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ürün adı giriniz." required />
            </div>
            <div class="mb-5">
                <label for="açıklama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ürün Açıklaması</label>
                <input type="text" id="açıklama" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ürün açıklaması giriniz." required />
            </div>
            <div class="mb-5">
                <label for="stok" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ürün Stok</label>
                <input type="number" id="stok" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ürün stok sayısını giriniz." required />
            </div>
            <div class="mb-5">
                <label for="stok" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ürün Fiyat</label>
                <input type="number" id="stok" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ürün fiyatını giriniz."/>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-40 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ekle</button>
        </form>
    )
}

export default UrunEkle