import { Link } from "react-router-dom";
import Logo from "../assets/Icons/Logo.png"
import { menuItemsData } from "../assets/menunItemsData";
const Footer = () => {
    return (
        <div className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <Link to="/" className="flex justify-center items-center text-lg font-medium text-gray-900 dark:text-white">
                    <img className="mr-2 h-8" viewBox="0 0 33 33" fill="none" alt="logo" src={Logo}></img>
                </Link>
                <p className="my-6 text-gray-500 dark:text-gray-400"></p>
                <ul className="flex flex-wrap justify-center items-center text-center mb-6 text-gray-900 dark:text-white">
                    {menuItemsData.map((menu, index) => {
                        return (
                            <li key={index}>
                                <Link to={menu.url} className="mr-4 hover:underline md:mr-6">
                                    {menu.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">©<Link to="/" className="hover:underline">Çeliktepe Rulman Sanayi Ticaret Limited Şirketi</Link>. Tüm hakları saklıdır.</span>
            </div>
        </div>
    )
}

export default Footer;