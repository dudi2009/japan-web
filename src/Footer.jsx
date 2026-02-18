import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaGoogle /></a>
        <a href="#"><FaYoutube /></a>
      </div>
      <ul className="footer-menu">
        <li>Home</li>
        <li>News</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Our Team</li>
      </ul>
      <div className="footer-copyright">
        Copyright ©2022; Designed by DaiduCoklat
      </div>
    </footer>
  );
}
