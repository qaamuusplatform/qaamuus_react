import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
    return (
         <header data-anim="fade" data-add-bg="bg-dark-1" className="header -type-1 js-header">
            <div className="header__container">
                <div className="row justify-between items-center">
                    <div className="col-auto">
                        <div className="header-left">
                            <div className="header__logo">
                                <Link  to='/'>
                                    <img src="assets/img/general/logo.svg" alt="logo" />
                                </Link>
                            </div>
                            <div className="header__explore text-green-1 ml-60 xl:ml-30 xl:d-none">
                                <a href="#" className="d-flex items-center" data-el-toggle=".js-explore-toggle">
                                    <i className="icon icon-explore mr-15" />
                                    Explore
                                </a>
                                <div className="explore-content py-25 rounded-8 bg-white toggle-element js-explore-toggle">
                                    <div className="explore__item">
                                        <a href="#" className="d-flex items-center justify-between text-dark-1">
                                            Architecture<div className="icon-chevron-right text-11" />
                                        </a>
                                        <div className="explore__subnav rounded-8">
                                            <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                            <a className="text-dark-1" href="courses-single-3.html">Design Tools</a>
                                            <a className="text-dark-1" href="courses-single-4.html">User Experience Design</a>
                                            <a className="text-dark-1" href="courses-single-5.html">Game Design</a>
                                            <a className="text-dark-1" href="courses-single-6.html">3D &amp; Animation</a>
                                            <a className="text-dark-1" href="courses-single-1.html">Fashion Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Interior Design</a>
                                        </div>
                                    </div>
                                    <div className="explore__item">
                                        <a href="#" className="d-flex items-center justify-between text-dark-1">
                                            Business<div className="icon-chevron-right text-11" />
                                        </a>
                                        <div className="explore__subnav rounded-8">
                                            <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                            <a className="text-dark-1" href="courses-single-3.html">Design Tools</a>
                                            <a className="text-dark-1" href="courses-single-4.html">User Experience Design</a>
                                            <a className="text-dark-1" href="courses-single-5.html">Game Design</a>
                                            <a className="text-dark-1" href="courses-single-6.html">3D &amp; Animation</a>
                                            <a className="text-dark-1" href="courses-single-1.html">Fashion Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Interior Design</a>
                                        </div>
                                    </div>
                                    <div className="explore__item">
                                        <a href="#" className="text-dark-1">Computer Programming</a>
                                    </div>
                                    <div className="explore__item">
                                        <a href="#" className="text-dark-1">Data Analysis</a>
                                    </div>
                                    <div className="explore__item">
                                        <a href="#" className="d-flex items-center justify-between text-dark-1">
                                            Design<div className="icon-chevron-right text-11" />
                                        </a>
                                        <div className="explore__subnav rounded-8">
                                            <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                            <a className="text-dark-1" href="courses-single-3.html">Design Tools</a>
                                            <a className="text-dark-1" href="courses-single-4.html">User Experience Design</a>
                                            <a className="text-dark-1" href="courses-single-5.html">Game Design</a>
                                            <a className="text-dark-1" href="courses-single-6.html">3D &amp; Animation</a>
                                            <a className="text-dark-1" href="courses-single-1.html">Fashion Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Interior Design</a>
                                        </div>
                                    </div>
                                    <div className="explore__item">
                                        <a href="courses-single-6.html" className="text-dark-1">Education</a>
                                    </div>
                                    <div className="explore__item">
                                        <a href="#" className="d-flex items-center justify-between text-dark-1">
                                            Electronics<div className="icon-chevron-right text-11" />
                                        </a>
                                        <div className="explore__subnav rounded-8">
                                            <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                            <a className="text-dark-1" href="courses-single-3.html">Design Tools</a>
                                            <a className="text-dark-1" href="courses-single-4.html">User Experience Design</a>
                                            <a className="text-dark-1" href="courses-single-5.html">Game Design</a>
                                            <a className="text-dark-1" href="courses-single-6.html">3D &amp; Animation</a>
                                            <a className="text-dark-1" href="courses-single-1.html">Fashion Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Interior Design</a>
                                        </div>
                                    </div>
                                    <div className="explore__item">
                                        <a href="#" className="d-flex items-center justify-between text-dark-1">
                                            Language<div className="icon-chevron-right text-11" />
                                        </a>
                                        <div className="explore__subnav rounded-8">
                                            <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                            <a className="text-dark-1" href="courses-single-3.html">Design Tools</a>
                                            <a className="text-dark-1" href="courses-single-4.html">User Experience Design</a>
                                            <a className="text-dark-1" href="courses-single-5.html">Game Design</a>
                                            <a className="text-dark-1" href="courses-single-6.html">3D &amp; Animation</a>
                                            <a className="text-dark-1" href="courses-single-1.html">Fashion Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Interior Design</a>
                                        </div>
                                    </div>
                                    <div className="explore__item">
                                        <a href="#" className="d-flex items-center justify-between text-dark-1">
                                            Marketing<div className="icon-chevron-right text-11" />
                                        </a>
                                        <div className="explore__subnav rounded-8">
                                            <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                            <a className="text-dark-1" href="courses-single-3.html">Design Tools</a>
                                            <a className="text-dark-1" href="courses-single-4.html">User Experience Design</a>
                                            <a className="text-dark-1" href="courses-single-5.html">Game Design</a>
                                            <a className="text-dark-1" href="courses-single-6.html">3D &amp; Animation</a>
                                            <a className="text-dark-1" href="courses-single-1.html">Fashion Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Interior Design</a>
                                        </div>
                                    </div>
                                    <div className="explore__item">
                                        <a href="#" className="text-dark-1">Music Arts</a>
                                    </div>
                                    <div className="explore__item">
                                        <a href="#" className="text-dark-1">Social Science</a>
                                    </div>
                                    <div className="explore__item">
                                        <a href="#" className="d-flex items-center justify-between text-dark-1">
                                            Photography &amp; Video<div className="icon-chevron-right text-11" />
                                        </a>
                                        <div className="explore__subnav rounded-8">
                                            <a className="text-dark-1" href="courses-single-1.html">Web Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Graphic Design</a>
                                            <a className="text-dark-1" href="courses-single-3.html">Design Tools</a>
                                            <a className="text-dark-1" href="courses-single-4.html">User Experience Design</a>
                                            <a className="text-dark-1" href="courses-single-5.html">Game Design</a>
                                            <a className="text-dark-1" href="courses-single-6.html">3D &amp; Animation</a>
                                            <a className="text-dark-1" href="courses-single-1.html">Fashion Design</a>
                                            <a className="text-dark-1" href="courses-single-2.html">Interior Design</a>
                                        </div>
                                    </div>
                                    <div className="explore__item">
                                        <a href="courses-single-1.html" className="text-dark-1">IT &amp; Software</a>
                                    </div>
                                    <div className="explore__item">
                                        <a href="courses-single-2.html" className="text-purple-1 underline">View All Courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-menu js-mobile-menu-toggle ">
                        <div className="header-menu__content">
                            <div className="mobile-bg js-mobile-bg" />
                            <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
                                <a href="login.html" className="text-dark-1">Log in</a>
                                <a href="signup.html" className="text-dark-1 ml-30">Sign Up</a>
                            </div>
                            <div className="menu js-navList">
                                <ul className="menu__nav text-white -is-active">
                                    <li>
                                        <Link data-barba to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link data-barba to="/courses">Courses</Link>
                                    </li>
                                    <li>
                                        <Link data-barba to="/events">Events</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a data-barba href="#">Members <i className="icon-chevron-right text-13 ml-10" /></a>
                                        <ul className="subnav">
                                            <li className="menu__backButton js-nav-list-back">
                                                <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Blog</a>
                                            </li>
                                            <li><a href="blog-list-1.html">Instructors</a></li>
                                           
                                            <li><a href="blog-single.html">HardWork Team</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a data-barba href="#">
                                            Pages <i className="icon-chevron-right text-13 ml-10" />
                                        </a>
                                        <ul className="subnav">
                                            <li className="menu__backButton js-nav-list-back">
                                                <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Pages</a>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">About Us<div className="icon-chevron-right text-11" /></a>
                                                <ul className="subnav">
                                                    <li className="menu__backButton js-nav-list-back">
                                                        <a href="#"><i className="icon-chevron-left text-13 mr-10" /> About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="about-1.html">About 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="about-2.html">About 2</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Contact<div className="icon-chevron-right text-11" /></a>
                                                <ul className="subnav">
                                                    <li className="menu__backButton js-nav-list-back">
                                                        <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Contact</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact-1.html">Contact 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact-2.html">Contact 2</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Shop<div className="icon-chevron-right text-11" /></a>
                                                <ul className="subnav">
                                                    <li className="menu__backButton js-nav-list-back">
                                                        <a href="#"><i className="icon-chevron-left text-13 mr-10" /> Shop</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">Shop Cart</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-checkout.html">Shop Checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-list.html">Shop List</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-order.html">Shop Order</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-single.html">Shop Single</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="pricing.html">Membership plans</a>
                                            </li>
                                            <li>
                                                <a href="404.html">404 Page</a>
                                            </li>
                                            <li>
                                                <a href="terms.html">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="help-center.html">Help Center</a>
                                            </li>
                                            <li>
                                                <a href="login.html">Login</a>
                                            </li>
                                            <li>
                                                <a href="signup.html">Register</a>
                                            </li>
                                            <li>
                                                <a href="ui-elements.html">UI Elements</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a data-barba href="contact-1.html">Contact</a>
                                    </li>
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
                    <div className="col-auto">
                        <div className="header-right d-flex items-center">
                            <div className="header-right__icons text-white d-flex items-center">
                                <div className>
                                    <button className="d-flex items-center text-white" data-el-toggle=".js-search-toggle">
                                        <i className="text-20 icon icon-search" />
                                    </button>
                                    <div className="toggle-element js-search-toggle">
                                        <div className="header-search pt-90 bg-white shadow-4">
                                            <div className="container">
                                                <div className="header-search__field">
                                                    <div className="icon icon-search text-dark-1" />
                                                    <input type="text" className="col-12 text-18 lh-12 text-dark-1 fw-500" placeholder="What do you want to learn?" />
                                                    <button className="d-flex items-center justify-center size-40 rounded-full bg-purple-3" data-el-toggle=".js-search-toggle">
                                                        <img src="assets/img/menus/close.svg" alt="icon" />
                                                    </button>
                                                </div>
                                                <div className="header-search__content mt-30">
                                                    <div className="text-17 text-dark-1 fw-500">Popular Right Now</div>
                                                    <div className="d-flex y-gap-5 flex-column mt-20">
                                                        <a href="courses-single-1.html" className="text-dark-1">The Ultimate Drawing Course - Beginner to Advanced</a>
                                                        <a href="courses-single-2.html" className="text-dark-1">Character Art School: Complete Character Drawing Course</a>
                                                        <a href="courses-single-3.html" className="text-dark-1">Complete Blender Creator: Learn 3D Modelling for Beginners</a>
                                                        <a href="courses-single-4.html" className="text-dark-1">User Experience Design Essentials - Adobe XD UI UX Design</a>
                                                        <a href="courses-single-5.html" className="text-dark-1">Graphic Design Masterclass - Learn GREAT Design</a>
                                                        <a href="courses-single-6.html" className="text-dark-1">Adobe Photoshop CC – Essentials Training Course</a>
                                                    </div>
                                                    <div className="mt-30">
                                                        <button className="uppercase underline">PRESS ENTER TO SEE ALL SEARCH RESULTS</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-search__bg" data-el-toggle=".js-search-toggle" />
                                    </div>
                                </div>
                                <div className="relative ml-30 xl:ml-20">
                                    <button className="d-flex items-center text-white" data-el-toggle=".js-cart-toggle">
                                        <i className="text-20 icon icon-basket" />
                                    </button>
                                    <div className="toggle-element js-cart-toggle">
                                        <div className="header-cart bg-white -dark-bg-dark-1 rounded-8">
                                            <div className="px-30 pt-30 pb-10">
                                                <div className="row justify-between x-gap-40 pb-20">
                                                    <div className="col">
                                                        <div className="row x-gap-10 y-gap-10">
                                                            <div className="col-auto">
                                                                <img src="assets/img/menus/cart/1.png" alt="image" />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-dark-1 lh-15">The Ultimate Drawing Course Beginner to Advanced...</div>
                                                                <div className="d-flex items-center mt-10">
                                                                    <div className="lh-12 fw-500 line-through text-light-1 mr-10">$179</div>
                                                                    <div className="text-18 lh-12 fw-500 text-dark-1">$79</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button><img src="assets/img/menus/close.svg" alt="icon" /></button>
                                                    </div>
                                                </div>
                                                <div className="row justify-between x-gap-40 pb-20">
                                                    <div className="col">
                                                        <div className="row x-gap-10 y-gap-10">
                                                            <div className="col-auto">
                                                                <img src="assets/img/menus/cart/2.png" alt="image" />
                                                            </div>
                                                            <div className="col">
                                                                <div className="text-dark-1 lh-15">User Experience Design Essentials - Adobe XD UI UX...</div>
                                                                <div className="d-flex items-center mt-10">
                                                                    <div className="lh-12 fw-500 line-through text-light-1 mr-10">$179</div>
                                                                    <div className="text-18 lh-12 fw-500 text-dark-1">$79</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button><img src="assets/img/menus/close.svg" alt="icon" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-30 pt-20 pb-30 border-top-light">
                                                <div className="d-flex justify-between">
                                                    <div className="text-18 lh-12 text-dark-1 fw-500">Total:</div>
                                                    <div className="text-18 lh-12 text-dark-1 fw-500">$659</div>
                                                </div>
                                                <div className="row x-gap-20 y-gap-10 pt-30">
                                                    <div className="col-sm-6">
                                                        <button className="button py-20 -dark-1 text-white -dark-button-white col-12">View Cart</button>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <button className="button py-20 -purple-1 text-white col-12">Checkout</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-none xl:d-block ml-20">
                                    <button className="text-white items-center" data-el-toggle=".js-mobile-menu-toggle">
                                        <i className="text-11 icon icon-mobile-menu" />
                                    </button>
                                </div>
                            </div>
                            <div className="header-right__buttons d-flex items-center ml-30 md:d-none">
                                <a href="login.html" className="button -underline text-white">Log in</a>
                                <a href="signup.html" className="button -sm -white text-dark-1 ml-30">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
       


    )
}

