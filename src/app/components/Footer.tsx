import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
    <div>
        <div className="bg-dark text-white">
                  <div className="container py-5">
                      <div className="row">
                          <div className="col-12 col-lg-4 text-center text-lg-start mb-md-5 mb-lg-0">
                              <Image
                                className="mb-4"
                                src="https://www.staradvertiser.com/wp-content/themes/hsa-redesign/images/sa-logo-white-small.png"
                                alt="Honolulu advertisement"
                                width={164}
                                height={35}
                                loading="lazy"
                              /> 
                              <p className="mb-4">
                                500 Ala Moana Blvd. #2-200
                                <br />
                                Honolulu, HI 96813
                                <br />
                                (808) 529-4747
                              </p>
                              <ul className="social d-flex list-unstyled gap-3">
                                <li className="navbar-item"><Link href="https://www.facebook.com/staradvertiser" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>

                                </Link></li>
                                <li><Link href="https://twitter.com/staradvertiser">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>
                                </Link></li>
                                <li><Link href="https://www.instagram.com/staradvertiser/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                  </svg></Link></li>
                                <li><Link href="https://www.youtube.com/StarAdvertiser"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-youtube" viewBox="0 0 16 16">
                                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                                    </svg></Link></li>
                                <li><Link href="https://www.linkedin.com/company/honolulu-star-advertiser">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                  </svg>
                                </Link></li>
                              </ul>   
                          </div>
                          <div className="col-2 d-none d-lg-block"></div>
                          <div className="col-4 col-lg-2 d-none d-md-block">
                            <p className="fw-bold">Our Company</p>
                            <ul id="menu-footer-menu-vertical-left-col " className="list-unstyled gap-3">
                              <li id="menu-item-1320027" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1320027 mt-2"><Link className="text-white" href="https://www.staradvertiser.com/about/">About Us</Link></li>
                              <li id="menu-item-1320028" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1320028 mt-2"><Link className="text-white" href="https://www.staradvertiser.com/contact/">Contact Us</Link></li>
                              <li id="menu-item-1320029" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1320029 mt-2"><Link className="text-white" href="https://www.oahupublications.com/" rel="noopener noreferrer">Advertise</Link></li>
                              <li id="menu-item-1320030" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-1320030 mt-2"><Link className="text-white" rel="privacy-policy" href="https://www.staradvertiser.com/about/privacy-policy/">Privacy Policy</Link></li>
                              <li id="menu-item-1320031" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1320031 mt-2"><Link className="text-white" href="https://www.staradvertiser.com/about/terms-of-service/">Terms of Service</Link></li>
                              </ul>
                          </div>
                          <div className="col-4 col-lg-2 d-none d-md-block">
                            <p className="fw-bold">Subscribers</p>
                              <ul id="menu-footer-menu-vertical-middle-col" className="list-unstyled gap-3">
                                <li id="menu-item-1320033" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1320033 mt-2"><Link className="text-white" href="https://gateway.staradvertiser.com/myaccount/login.php?ref=">My Account</Link></li>
                                <li id="menu-item-1320034" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1320034 mt-2"><Link className="text-white" href="https://gateway.staradvertiser.com/account_lookup.php">Activate Digital Account</Link></li>
                                <li id="menu-item-132003" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1320035 mt-2"><Link className="text-white" href="https://www.staradvertiser.com/user-access/print-replica/">Print Replica</Link></li>
                                <li id="menu-item-1320036" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1320036 mt-2"><Link className="text-white" href="https://gateway.staradvertiser.com/customer-service/">Customer Service</Link></li>
                                <li id="menu-item-1320037" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1320037 mt-2"><Link className="text-white" href="https://gateway.staradvertiser.com/faq.php">FAQs</Link></li>
                              </ul>
                          </div>
                          <div className="col-4 col-lg-2 d-none d-md-block">
                            <p className="fw-bold">More</p>
                              <ul id="menu-footer-menu-vertical-right-col" className="list-unstyled">
                                <li id="menu-item-1320038" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1320038 mt-2"><Link className="text-white" target="_blank" rel="noopener" href="https://www.staradvertiser.com/download/" data-bs-toggle="tooltip" title="" data-placement="auto" data-bs-original-title="Opens a new tab">Mobile App&nbsp;<span className="icon-external-link-square"></span><span className="visually-hidden">Opens in a new tab</span></Link></li>
                                <li id="menu-item-1320039" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1320039 mt-2"><Link className="text-white" href="/news-alerts-signup/">Email Newsletters</Link></li>
                                <li id="menu-item-1320040" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1320040 mt-2"><Link className="text-white" href="/web-notifications/">Web Push Notifications</Link></li>
                                <li id="menu-item-1320041" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1320041 mt-2"><Link className="text-white" href="/search/">Search</Link></li>
                                <li id="menu-item-1320042" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1320042 mt-2"><Link className="text-white" href="/back-issues/">Archives</Link></li>

                               </ul>
                          </div>
                          
                      </div>
                     
                  </div>
              </div>
               <div className="disclaimer bg-black text-center p-3 w-100 text-white">
                   Copyright © 
                   <Link className="text-white"href="https://www.staradvertiser.com">StarAdvertiser.com</Link>
                   . All rights reserved. 
                   <Link className="text-white" href="https://www.oahupublications.com/privacy_policy/" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" title="" data-placement="auto" data-bs-original-title="Opens a new tab">
                   Privacy Policy&nbsp;<span className="icon-external-link-square"></span>
                   <span className="visually-hidden">Opens in a new tab</span></Link>
                    | <Link className="text-white" href="https://www.oahupublications.com/terms-of-service/" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" title="" data-placement="auto" data-bs-original-title="Opens a new tab">
                    Terms of Service&nbsp;
                    <span className="icon-external-link-square"></span>
                    <span className="visually-hidden">Opens in a new tab</span>
                    </Link> |  <div id="ccpa-optout" className="d-inline"></div>
                </div> 
    </div>
    )
}