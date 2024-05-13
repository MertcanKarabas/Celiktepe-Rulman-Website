import { useState } from "react";
import { menuItemsData } from "../assets/menunItemsData";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import DropdownBurger from "./DropdownBurger";

const BurgerMenu = () => {
    const location = useLocation();
    const currentURL = location.pathname;
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Menü durumunu tersine çevir
    };
    const [dropdown, setDropdown] = useState(false);
    const buttonClassName = (currentURL === "/kurumsal/hakkimizda" || currentURL === "/kurumsal/yonetim-kurulu") ? "block text-primary-700 dark:text-white" : "flex text-black dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";
    return (
        <div className="flex items-center lg:order-2">
            <button data-collapse-toggle="mobile-menu-2" type="button" onClick={toggleMenu}
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2" aria-expanded="false">
                <RxHamburgerMenu className="text-xl text-black" />
            </button>
            {menuOpen && (
                <nav className="absolute px-10 py-8 right-0 top-14 md:top-24 z-20 w-full bg-white border-b-2">
                    <div className="flex flex-col justify-start items-start space-y-10 font-extralight text-black">
                        {menuItemsData.map((item, index) => {
                            return (
                                <ul key={index}>
                                    {item.submenu ? (
                                        <>
                                            <button
                                                className={buttonClassName}
                                                aria-expanded={dropdown ? "true" : "false"}
                                                onClick={() => setDropdown(!dropdown)}
                                            >
                                                {item.title}
                                            </button>
                                            <DropdownBurger
                                                submenus={item.submenu}
                                                dropdown={dropdown}
                                            />
                                        </>
                                    ) : (
                                        <li>
                                            <NavLink
                                                to={item.url}
                                                className={({ isActive }) => [
                                                    isActive ? "bg-steel-500 block trasition-all duration-300 ease-out h-0.5 w-full -translate-y-0.5 text-primary-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" : "bg-steel-500 block trasition-all duration-300 ease-out h-0.5 w-full rounded-sm -translate-y-0.5",
                                                ].join(" ")}
                                            >
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    )}
                                </ul>
                            )
                        })}
                    </div>
                </nav>
            )}
        </div>
    )
}

export default BurgerMenu;