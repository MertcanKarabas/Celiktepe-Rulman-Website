import { NavLink } from "react-router-dom";

const DropdownBurger = ({ submenus, dropdown }) => {
    return (
        <ul className={`${dropdown ? "flex flex-col space-y-5 ml-4 bg-white" : "hidden"}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="">
                    <NavLink
                        to={submenu.url}                        
                        className={({ isActive }) =>
                            [
                                isActive ? "py-2 bg-steel-500 trasition-all duration-300 ease-out h-0.5 w-full -translate-y-0.5 text-primary-700 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" : "bg-steel-500 block trasition-all duration-300 ease-out h-0.5 w-full rounded-sm -translate-y-0.5",
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

export default DropdownBurger;