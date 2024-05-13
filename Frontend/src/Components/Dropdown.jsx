import { NavLink } from "react-router-dom";

const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul className={`${dropdown ? "absolute z-10 py-2 px-4 bg-white" : "hidden"}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="">
                    <NavLink
                        to={submenu.url}
                        className={({ isActive }) =>
                            [
                                isActive ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700",
                            ].join(" ")
                        }
                    >
                        {submenu.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;