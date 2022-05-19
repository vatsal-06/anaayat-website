import logo from '../public/logo.png';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <div className="navbar__image-container">
            <Image src={logo} alt="Logo" className="navbar__image" />
          </div>
          <span>Anaayat</span>
        </div>
        <ul className="navbar__links" id="nav-links">
          <li>
            <Link className="navbar__link" href="/">
              Home
            </Link>
          </li>
          <span className="navbar__dot">·</span>
          <li>
            <Link className="navbar__link" href="/about">
              About
            </Link>
          </li>
          <span className="navbar__dot">·</span>
          <li>
            <Link className="navbar__link" href="/drives">
              Drives
            </Link>
          </li>
          <span className="navbar__dot">·</span>
          <li>
            <Link className="navbar__link" href="/bifrost">
              Bifrost
            </Link>
          </li>
          <span className="navbar__dot"></span>
        </ul>
        <div
          className="navbar__hamburger"
          id="burger"
          onClick={() => {
            const nav = document.getElementById('nav-links');
            console.log(nav);
            const burger = document.getElementById('burger');
            nav.classList.toggle('navactive');
            burger.classList.toggle('navbar__toggle');
          }}
        >
          <div className="navbar__hamburger-1"></div>
          <div className="navbar__hamburger-2"></div>
          <div className="navbar__hamburger-3"></div>
        </div>
      </div>
    </nav>
  );
}
