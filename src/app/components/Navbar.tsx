'use client';
// import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Main navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-black sticky-top p-0 flex-wrap"
        style={{ zIndex: 1030 }}
      >
        <div className="container py-2 nbar-sub d-flex align-items-center">
          {/* Hamburger button */}
          <button
            className="navbar-toggler d-inline-block me-2"
            type="button"
            aria-expanded={isOpen}
            aria-controls="flyoutMenu"
            aria-label="Toggle Sections"
            title="Sections"
            onClick={toggleMenu}
          >
            <span>
              <i className="fa fa-bars" style={{ color: 'white', fontSize: '22px' }}></i>
            </span>
          </button>

          {/* Logo: always visible in navbar (mobile and desktop) */}
          {/* <div className="mx-auto mx-lg-0 my-2 my-lg-0 d-flex align-items-center" style={{ minWidth: 164 }}>
            <Link href="https://www.staradvertiser.com/" title="Honolulu Star-Advertiser" className="d-block">
              <Image
                src="https://www.staradvertiser.com/wp-content/themes/hsa-redesign/images/sa-logo-white-small.png"
                alt="Honolulu Star-Advertiser"
                width={164}
                height={35}
                priority
              />
            </Link>
          </div> */}

          {/* Collapsible menu */}
          <div
            className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
            id="flyoutMenu"
          >
            {/* Icons: aligned horizontally, centered vertically */}
            <ul className="icons navbar-nav me-auto d-flex flex-row gap-3 align-items-center">
              <li className="nav-item">
                <Link href="/search" className="nav-link" title="Search">
                  <span>
                    <i className="fas fa-search" style={{ color: 'white', fontSize: '22px' }}></i>
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="https://printreplica.staradvertiser.com"
                  className="nav-link"
                  title="Print Replica"
                >
                  <span>
                    <i
                      className="fa fa-newspaper"
                      aria-hidden="true"
                      style={{ color: 'white', fontSize: '22px' }}
                    ></i>
                  </span>
                </Link>
              </li>
            </ul>

            {/* Action buttons: also centered vertically */}
            <ul className="navbar-nav topnav d-flex flex-row gap-3 align-items-center">
              <li className="nav-item d-flex align-items-center">
                <Link href="https://www.staradvertiser.com/hawaiisbest2025/" className="button-1">
                  Vote Hawaii&apos;s Best
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="button-3"
                  href="https://gateway.staradvertiser.com/index.html?flow_type=subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe&nbsp;
                  <span>
                    <i className="fa fa-square-arrow-up-right"></i>
                  </span>
                  <span className="visually-hidden">Opens in a new tab</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="button-2" href="https://www.staradvertiser.com/user-access/">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header navigation links - show only on desktop */}
      <header className="top-nav w-100 align-items-center d-none d-lg-block">
        <div
          className="top-sub-nav navbar navbar-expand-lg navbar-dark align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.81)', height: '40px' }}
        >
          <div className="container">
            <ul
              id="menu-top-navigation"
              className="navbar-nav d-flex mx-auto gap-3"
            >
              <li className="nav-item fw-bold">
                <Link href="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link href="/business" className="nav-link text-white">
                  Business
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link href="/sports" className="nav-link text-white">
                  Health
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link href="/sports" className="nav-link text-white">
                  Sports
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link href="/politics" className="nav-link text-white">
                  Politics
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link href="/science" className="nav-link text-white">
                  Science
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link href="/technology" className="nav-link text-white">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Header navigation links - show only on mobile below navbar */}
      <div className="d-lg-none bg-black py-2">
        <div className="container">
          <ul
            id="menu-top-navigation-mobile"
            className="navbar-nav d-flex flex-column gap-2"
            style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: 0 }}
          >
            <li className="nav-item fw-bold">
              <Link href="/" className="nav-link text-white p-0">
                Home
              </Link>
            </li>
            <li className="nav-item fw-bold">
              <Link href="/business" className="nav-link text-white p-0">
                Business
              </Link>
            </li>
            <li className="nav-item fw-bold">
              <Link href="/sports" className="nav-link text-white p-0">
                Health
              </Link>
            </li>
            <li className="nav-item fw-bold">
              <Link href="/sports" className="nav-link text-white p-0">
                Sports
              </Link>
            </li>
            <li className="nav-item fw-bold">
              <Link href="/politics" className="nav-link text-white p-0">
                Politics
              </Link>
            </li>
            <li className="nav-item fw-bold">
              <Link href="/science" className="nav-link text-white p-0">
                Science
              </Link>
            </li>
            <li className="nav-item fw-bold">
              <Link href="/technology" className="nav-link text-white p-0">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
