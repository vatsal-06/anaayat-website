import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
            <img src="/logo.png" alt="Logo" className="navbar__image" />
            <span>Anaayat</span>
        </div>
        <div className="navbar__links">
          <Link href="/">Home</Link>
          <span className="navbar__dot">·</span>
          <Link href="/about">About</Link>
          <span className="navbar__dot">·</span>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
