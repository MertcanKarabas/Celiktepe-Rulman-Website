//import Logo from "../Icons/Logo.png"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import BurgerMenu from "./BurgerMenu";
import Logo from '../assets/Icons/Logo.png'
const Header = () => {

    return (
        <div className="pb-6 bg-white lg:pb-0 border-b-2">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to={"/"} className="flex items-center">
                        <img src={Logo} alt="logo" className="mr-3 h-9 sm:h-20" />
                    </Link>
                    <BurgerMenu />
                    <Navbar />
                </div>
            </nav>
        </div>
    )
}

export default Header;