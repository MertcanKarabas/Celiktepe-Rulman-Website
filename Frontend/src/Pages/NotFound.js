import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <Header />
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-orange-600 dark:text-orange-500">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Bir şeyler yanlış </p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Üzgünüz, Sayfa bulunamadı. Ana sayfada dolaşarak daha fazla şey bulabilirsin.</p>
                        <Link to="/" className="inline-flex text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-orange-900 my-4">Ana Sayfaya Dön</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default NotFound;