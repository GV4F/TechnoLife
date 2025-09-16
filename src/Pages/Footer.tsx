import "../Style/Footer.css";
// * ICONS
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full h-[200px] mt-[50px]">
      <div className="footer_top flex justify-center items-center">
        <ul className="flex gap-5 text-light">
          <li><a href="https://facebook.com" className="footer-socialnet"><span><FaFacebook /></span></a></li>
          <li><a href="https://tiktok.com" className="footer-socialnet"><span><FaTiktok /></span></a></li>
          <li><a href="https://instagram.com" className="footer-socialnet"><span><FaInstagram /></span></a></li>
        </ul>
      </div>
      <div className="footer_bottom bg-color-purple text-light flex justify-center items-center">
        <p>Copyright @2025</p>
      </div>
    </footer>
  )
}

export default Footer;