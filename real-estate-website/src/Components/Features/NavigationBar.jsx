import { NavLink } from "react-router-dom"
import LaptopLogoSVG from "../SVGs/LaptopLogoSVG";

const NavigationBar = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#141414" : "#262626",
      borderRadius: isActive ? "3px" : "none",
    }
  }

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-grey15 text-white text-sm">
      <div className="logo">
        <LaptopLogoSVG />
      </div>
      <nav>
        <div className="page-navs">
          <ul className="flex gap-x-4">
            <NavLink to='/' style={navLinkStyles} className="p-2 hover:bg-grey08">Home</NavLink>
            <NavLink to="/about-us" style={navLinkStyles} className="p-2 hover: bg-grey08">About Us</NavLink>
            <NavLink to="/properties" style={navLinkStyles} className="p-2 hover:bg-grey08">Properties</NavLink>
            <NavLink to="/services" style={navLinkStyles} className="p-2 hover:bg-grey08">Services</NavLink>
          </ul>
        </div>
      </nav>
      <div className="contact-btn">
        <button className="bg-grey08 p-2 rounded-md">Contact Us</button>
      </div>
    </header>
  )
}

export default NavigationBar
