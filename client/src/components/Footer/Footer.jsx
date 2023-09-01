import ItemsContainer from "./ItemsContainers";
import SocialIcons from "./SocialIcon";
import { Icons } from "./Menus";

const Footer = () => {
    return(
        <footer className="bg-[#313131] text-white" id="footer">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#B99768] shadow-lg py-7">
        </div>
        <ItemsContainer />
        <div
            className="grid grid-cols-1 gap-10 pt-2 pb-8 text-sm text-center text-gray-400 sm:grid-cols-2 lg:grid-cols-3"
        >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
        </div>
    </footer>
    );
  };

export default Footer;