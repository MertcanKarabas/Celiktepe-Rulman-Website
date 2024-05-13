import { NavLink, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from "react";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    const location = useLocation();
    const currentURL = location.pathname;

    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };
    const buttonClassName = (currentURL === "/kurumsal/hakkimizda" || currentURL === "/kurumsal/yonetim-kurulu") ? 
    "block py-4 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white cursor-default" : 
    "block py-4 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 cursor-default";
    return (
        <ul
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {items.submenu ? (
                <>
                    <button
                        className={buttonClassName}
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => null}
                    >
                        {items.title}
                    </button>
                    <Dropdown
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <li>
                    <NavLink
                        to={items.url}
                        className={({ isActive }) =>
                            [
                                isActive ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700",
                            ].join(" ")
                        }
                    >
                        {items.title}
                    </NavLink>
                </li>
            )}
        </ul>
    );
};

export default MenuItems;