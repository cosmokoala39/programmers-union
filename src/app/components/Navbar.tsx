'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(){
   const [isOpen] = useState(false);
    return(
        <>
        {/* Main navbar with search and buttons - This will be sticky */}
        <div 
  className="navbar nbar-class navbar-expand-lg navbar-dark bg-black sticky-top p-0 flex-wrap" 
  style={{ zIndex: 1030 }}
>
  <div className="container py-2 nbar-sub">
                     <button
                      className="navbar-toggler d-inline-block me-2"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls="flyoutMenu"
                      aria-label="Toggle Sections"
                      title="Sections"
                      
                    >
                      <span ><i className="fa fa-bars"style={{color:'white',fontSize:'22px'}}></i></span>
                    </button>

                    {/* The menu itself (optional)
                    <div
                      id="flyoutMenu"
                      className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
                    >
                      {/* Place your collapsed section content here */}
                    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="icons navbar-nav me-auto">
                    <li className="nav-item mx-2">
                      <Link
                        href="/search"
                        className="nav-link"
                        title="Search"
                      >
                        <span>
                          <i className="fas fa-search" style={{ color: 'white', fontSize: '22px' }}></i>
                        </span>

                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <a
                        href="https://printreplica.staradvertiser.com"
                        className="nav-link"
                        title="Print Replica"
                      >
                        <span><i className="fa fa-newspaper" aria-hidden="true" style={{ color: 'white', fontSize: '22px' }}></i></span>
                      </a>
                    </li>
                  </ul>
                       <div className="mx-auto">
                          <a
                            href="https://www.staradvertiser.com/"
                            title="Honolulu Star-Advertiser"
                          >
                            <Image
                              src="https://www.staradvertiser.com/wp-content/themes/hsa-redesign/images/sa-logo-white-small.png"
                              alt="Honolulu Star-Advertiser"
                              width={164}
                              height={35}
                              priority
                            />
                          </a>
                        </div>
                  <ul className="navbar-nav topnav">
                    <li className="nav-item mx-2 d-flex align-items-center">
                      <Link
                        href="https://www.staradvertiser.com/hawaiisbest2025/"
                        className="button-1"
                      >
                        Vote Hawaii&apos;s Best
                      </Link>
                    </li>
                      
                    <li className="nav-item mx-2 mt-1">
                      <a
                        className="button-3"
                        href="https://gateway.staradvertiser.com/index.html?flow_type=subscribe"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Subscribe&nbsp;
                        <span><i className="fa fa-square-arrow-up-right"></i></span>
                        <span className="visually-hidden">Opens in a new tab</span>
                      </a>
                    </li>
                      
                    <li className="nav-item mx-2 mt-1">
                      <a
                        className="button-2"
                        href="https://www.staradvertiser.com/user-access/"
                      >
                        Log In
                      </a>
                    </li>
                  </ul>
                </div>

            </div>
        </div>
        
        {/* Secondary navigation - This will scroll normally */}
        <header className="top-nav w-100 align-items-center" >
            <div className="top-sub-nav navbar navbar-expand-lg navbar-dark d-none d-lg-flex align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.81)',height:'40px' }}>
                <div className="container ">
                   <ul id="menu-top-navigation" className="navbar-nav d-block mx-auto d-flex gap-3 ">
                        <li className="nav-item mx-2 fw-bold">
                          <Link href="/" className="nav-link text-white">Home</Link>
                        </li>

                        <li className="nav-item mx-2 fw-bold">
                          <Link href='/business' className="nav-link text-white">
                              Business
                            </Link>
                        </li>

                        <li className="nav-item mx-2 fw-bold">
                          <Link href='/sports' className="nav-link text-white">
                              Health
                            </Link>
                        </li>
                        <li className="nav-item mx-2 fw-bold">
                          
                            <Link href='/sports' className="nav-link text-white">
                              Sports
                            </Link>
                            
                        
                        </li>
                        <li className="nav-item mx-2 fw-bold">
                          <Link href='/politics' className="nav-link text-white">
                              Politics
                            </Link>
                        </li>
                        <li className="nav-item mx-2 fw-bold">
                          <Link href='/science' className="nav-link text-white">
                              Science
                            </Link>
                        </li>
                        <li className="nav-item mx-2 fw-bold">
                          <Link href='/technology' className="nav-link text-white">
                              Technology
                            </Link>
                        </li>
                        
                        
                        

  
                    </ul>                 
                </div>
            </div>
        </header>
       </>
    )
}