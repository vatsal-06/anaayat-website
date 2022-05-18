import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src="/logo.png" alt="Logo" className="navbar__image" />
          <span>Anaayat</span>
        </div>
        <ul className="navbar__links" id="nav-links">
          <li>
            <a className="navbar__link" href="/">
              Home
            </a>
          </li>
          <span className="navbar__dot">·</span>
          <li>
            <a className="navbar__link" href="/about">
              About
            </a>
          </li>
          <span className="navbar__dot">·</span>
          <li>
            <a className="navbar__link" href="/drives">
              Drives
            </a>
          </li>
          <span className="navbar__dot">·</span>
          <li>
            <a className="navbar__link" href="/bifrost">
              Bifrost
            </a>
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
