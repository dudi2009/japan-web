import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle, FaYoutube, FaGithub, FaSteam, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=61583350645243"><FaFacebookF /></a>
        <a href="https://www.instagram.com/qajaksnjao6/"><FaInstagram /></a>
        <a href="#"><FaDiscord /></a>
        <a href="https://github.com/dudi2009"><FaGithub /></a>
        <a href="#"><FaSteam /></a>
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
