import { Link, useLocation } from 'react-router-dom';

export default function SidebarItem({ item }) {
    const location = useLocation();
    const isActive = location.pathname === item.path; // Check if the current path matches the item's path
    const activeClass = isActive ? 'bg-[#DAE3C6] text-[#000]' : '';
    const inactiveClass = isActive ? '' : 'hover:bg-[#DAE3C6]';

    return (
        <Link
            to={item.path || '#'}
            className={`flex items-center gap-3 mt-[1rem] justify-between w-full py-2  px-3 ${inactiveClass} ${activeClass}`}
        >
            <img src={item.icon} alt="" className="md:w-8  md:h-8 w-4 h-4" />
            <p className=" mr-auto  justify-self-start  font-[600] text-[1rem] hidden md:block text-[#fff] leading-[30px]">
                {item.title}
            </p>
            
        </Link>
    );
}
