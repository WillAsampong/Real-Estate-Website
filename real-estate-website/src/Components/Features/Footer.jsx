import InputEmailSVG from "../SVGs/InputEmailSVG"
import LaptopLogoSVG from "../SVGs/LaptopLogoSVG"
import SendEmailSVG from "../SVGs/SendEmailSVG"


const Footer = () => {
  return (
    <div className="bg-grey10">
      <div className="flex w-5/6 mx-auto justify-between p-10">
        <div className="">
          <div className="logo">
            <LaptopLogoSVG />
          </div>
          <div className="border border-gray-400 rounded-md px-4 py-2 flex mt-2">
            <InputEmailSVG />
            <input type="email" placeholder="Enter Your Email" className="outline-none border-none bg-transparent"/>
            <SendEmailSVG />
          </div>
        </div>

        <div className="footer-links flex gap-x-12">
          <div className="Home">
            <span className="text-grey50">Home</span>
            <ul className="text-sm text-white flex flex-col gap-y-4 pt-2">
              <li>Hero Section</li>
              <li>Features</li>
              <li>Properties</li>
              <li>Testimonials</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="About-Us">
            <span className="text-grey50">About Us</span>
            <ul className="text-sm text-white flex flex-col gap-y-4 pt-2">
              <li>Our Story</li>
              <li>Our Works</li>
              <li>How It Works</li>
              <li>Our Team</li>
              <li>Our Clients</li>
            </ul>
          </div>
          <div className="Properties">
            <span className="text-grey50">Properties</span>
            <ul className="text-sm text-white flex flex-col gap-y-4 pt-2">
              <li>Portfolio</li>
              <li>Categories</li>
            </ul>
          </div>
          <div className="Services">
            <span className="text-grey50">Services</span>
            <ul className="text-sm text-white flex flex-col gap-y-4 pt-2">
              <li>Valuation Mastery</li>
              <li>Strategic Marketing</li>
              <li>Negotiation Wizadry</li>
              <li>Closing Success</li>
              <li>Property Management</li>
            </ul>
          </div>
          <div className="Contact-Us">
            <span className="text-grey50">Contact Us</span>
            <ul className="text-sm text-white flex flex-col gap-y-4 pt-2">
              <li>Contact Form</li>
              <li>Our Offices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
