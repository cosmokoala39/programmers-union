'use client';
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
        <div className="container py-2 nbar-sub d-flex align-items-center justify-content-between">
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

          {/* Centered title/logo */}
          <div className="flex-grow-1 ">
            <h1 className="m-0 text-white" style={{ fontSize: '1.25rem' }}>
              <Link href="https://melonpost.org" className='text-decoration-none text-white'>MELONPOST</Link>
            </h1>
          </div>

          {/* Collapsible menu (right-aligned on desktop) */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="flyoutMenu">
            {/* Icons */}
            <ul className="icons navbar-nav ms-auto d-flex flex-row gap-3 align-items-center">
              <li className="nav-item">
                <Link href="/" className="nav-link" title="Search">
                  <i className="fas fa-search" style={{ color: 'white', fontSize: '22px' }}></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="##" className="nav-link" title="Print Replica">
                  <i className="fa fa-newspaper" style={{ color: 'white', fontSize: '22px' }}></i>
                </Link>
              </li>
            </ul>

            {/* Action buttons */}
            <ul className="navbar-nav topnav d-flex flex-row gap-3 align-items-center ms-3">
              <li className="nav-item">
                <Link href="#" className="button-1">
                  Vote Hawaii&apos;s Best
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="button-3" target="_blank" rel="noopener noreferrer">
                  Subscribe&nbsp;
                  <i className="fa fa-square-arrow-up-right"></i>
                  <span className="visually-hidden">Opens in a new tab</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="button-2">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header navigation - desktop only */}
      <header className="top-nav w-100 align-items-center d-none d-lg-block">
        <div
          className="top-sub-nav navbar navbar-expand-lg navbar-dark align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.81)', height: '40px' }}
        >
          <div className="container">
            <ul id="menu-top-navigation" className="navbar-nav d-flex mx-auto gap-3">
              <li className="nav-item fw-bold"><Link href="/" className="nav-link text-white">Home</Link></li>
              <li className="nav-item fw-bold"><Link href="/business" className="nav-link text-white">Business</Link></li>
              <li className="nav-item fw-bold"><Link href="/health" className="nav-link text-white">Health</Link></li>
              <li className="nav-item fw-bold"><Link href="/sports" className="nav-link text-white">Sports</Link></li>
              <li className="nav-item fw-bold"><Link href="/politics" className="nav-link text-white">Politics</Link></li>
              <li className="nav-item fw-bold"><Link href="/science" className="nav-link text-white">Science</Link></li>
              <li className="nav-item fw-bold"><Link href="/technology" className="nav-link text-white">Technology</Link></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Header navigation - mobile only (shows on hamburger click) */}
      {isOpen && (
        <div className="d-lg-none bg-black py-2">
          <div className="container">
            <ul
              id="menu-top-navigation-mobile"
              className="navbar-nav d-flex flex-column gap-2"
              style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: 0 }}
            >
              <li className="nav-item fw-bold"><Link href="/" className="nav-link text-white p-0">Home</Link></li>
              <li className="nav-item fw-bold"><Link href="/business" className="nav-link text-white p-0">Business</Link></li>
              <li className="nav-item fw-bold"><Link href="/health" className="nav-link text-white p-0">Health</Link></li>
              <li className="nav-item fw-bold"><Link href="/sports" className="nav-link text-white p-0">Sports</Link></li>
              <li className="nav-item fw-bold"><Link href="/politics" className="nav-link text-white p-0">Politics</Link></li>
              <li className="nav-item fw-bold"><Link href="/science" className="nav-link text-white p-0">Science</Link></li>
              <li className="nav-item fw-bold"><Link href="/technology" className="nav-link text-white p-0">Technology</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
