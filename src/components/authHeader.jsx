import React from 'react'

export default function AuthHeader() {
    return (
        // <header data-anim="fade" data-add-bg className="header -base js-header">
        <header   className="header -base js-header">
            <div className="header__container py-10">
                <div className="row justify-between items-center">
                    <div className="col-auto">
                        <div className="header-left">
                            <div className="header__logo ">
                                <a data-barba href="index.html">
                                    <img src="/assets/img/general/logo.svg" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="header-right d-flex items-center">
                            <div className="header-menu js-mobile-menu-toggle ">
                                <div className="header-menu__content">
                                    <div className="mobile-bg js-mobile-bg" />
                                    <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
                                        <a href="login.html" className="text-dark-1">Log in</a>
                                        <a href="signup.html" className="text-dark-1 ml-30">Sign Up</a>
                                    </div>
                                    <div className="menu js-navList">
                                        <ul className="menu__nav text-dark-1 -is-active">
                                            
                                            
                                          
                                          
                                           
                                        </ul>
                                    </div>
                                    <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                                        <div className="mobile-footer__number">
                                            <div className="text-17 fw-500 text-dark-1">Call us</div>
                                            <div className="text-17 fw-500 text-purple-1">800 388 80 90</div>
                                        </div>
                                        <div className="lh-2 mt-10">
                                            <div>329 Queensberry Street,<br /> North Melbourne VIC 3051, Australia.</div>
                                            <div>hi@educrat.com</div>
                                        </div>
                                        <div className="mobile-socials mt-10">
                                            <a href="#" className="d-flex items-center justify-center rounded-full size-40">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="#" className="d-flex items-center justify-center rounded-full size-40">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="#" className="d-flex items-center justify-center rounded-full size-40">
                                                <i className="fa fa-instagram" />
                                            </a>
                                            <a href="#" className="d-flex items-center justify-center rounded-full size-40">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-menu-close" data-el-toggle=".js-mobile-menu-toggle">
                                    <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
                                        <div className="icon-close text-dark-1 text-16" />
                                    </div>
                                </div>
                                <div className="header-menu-bg" />
                            </div>
                            <div className="mr-30">
                                <div className="d-none xl:d-block ml-20">
                                    <button className="text-dark-1 items-center" data-el-toggle=".js-mobile-menu-toggle">
                                        <i className="text-11 icon icon-mobile-menu" />
                                    </button>
                                </div>
                            </div>
                            <div className="header-right__buttons md:d-none">
                                <a href="signup.html" className="button -sm -rounded -dark-1 text-white">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}
