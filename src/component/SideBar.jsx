import { FaFire } from 'react-icons/fa';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { PiAlien } from "react-icons/pi";




const SideBar = () => {
    return(
    <div className="sidebar">
        
        <SideBarIcon icon={<FaFire size="28" />} />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<PiAlien  size="27" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />


    </div>
    );
};

const SideBarIcon = ({ icon,text = 'Lorem Ipsum' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
    

);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;