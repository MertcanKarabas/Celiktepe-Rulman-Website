import { menuItemsData } from '../assets/menunItemsData';
import MenuItems from './MenuItems';

const Navbar = () => {
    return (
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-row mt-4 font-extralight text-black lg:flex-row lg:space-x-8 lg:mt-0">
                {menuItemsData.map((menu, index) => {
                    return (
                        <MenuItems items={menu} key={index} />
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;