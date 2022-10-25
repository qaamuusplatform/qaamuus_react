import React from 'react'

export default function CoursesList() {
    return (
        <>     
            <br />
            <br />
            <section className="layout-pt-md layout-pb-lg">
            <div className="container">
                    <div className="page-header__content">
                        <div className="row">
                            <div className="col-auto">
                                <div data-anim="slide-up delay-1">
                                    <h1 className="page-header__title">User Interface Courses</h1>
                                </div>
                                <div data-anim="slide-up delay-2">
                                    <p className="page-header__text">Write an introductory description of the category.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-anim="slide-up delay-2" className="container">
                    <div className="accordion js-accordion">
                        <div className="accordion__item">
                            <div className="row y-gap-20 items-center justify-between pb-30">
                                <div className="col-auto">
                                    <div className="text-14 lh-12">Showing <span className="text-dark-1 fw-500">250</span> total results</div>
                                </div>
                                <div className="col-auto">
                                    <div className="row x-gap-20 y-gap-20">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="text-14 lh-12 fw-500 text-dark-1 mr-20">Sort by:</div>
                                                <div className="dropdown js-dropdown js-category-active">
                                                    <div className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12" data-el-toggle=".js-category-toggle" data-el-toggle-active=".js-category-active">
                                                        <span className="js-dropdown-title">Most Popular</span>
                                                        <i className="icon text-9 ml-40 icon-chevron-down" />
                                                    </div>
                                                    <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                                                        <div className="text-14 y-gap-15 js-dropdown-list">
                                                            <div><a href="#" className="d-block js-dropdown-link">Animation</a></div>
                                                            <div><a href="#" className="d-block js-dropdown-link">Design</a></div>
                                                            <div><a href="#" className="d-block js-dropdown-link">Illustration</a></div>
                                                            <div><a href="#" className="d-block js-dropdown-link">Business</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="accordion__button w-unset">
                                                <button className="button h-50 px-30 -light-7 text-purple-1">
                                                    <i className="icon-filter mr-10" />
                                                    Filter
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion__content">
                                <div className="sidebar -courses px-30 py-30 rounded-8 bg-light-3 mb-50">
                                    <div className="row x-gap-60 y-gap-40">
                                        <div className="col-xl-3 col-lg-4 col-sm-6">
                                            <div className="sidebar__item">
                                                <h5 className="sidebar__title">Category</h5>
                                                <div className="sidebar-checkbox">
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Art</div>
                                                        <div className="sidebar-checkbox__count">(18)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Exercise</div>
                                                        <div className="sidebar-checkbox__count">(12)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Software Development</div>
                                                        <div className="sidebar-checkbox__count">(23)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Music</div>
                                                        <div className="sidebar-checkbox__count">(67)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Material Design</div>
                                                        <div className="sidebar-checkbox__count">(34)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Photography</div>
                                                        <div className="sidebar-checkbox__count">(12)</div>
                                                    </div>
                                                </div>
                                                <div className="sidebar__more mt-15">
                                                    <a href="#" className="text-14 fw-500 underline text-purple-1">Show more</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-sm-6">
                                            <div className="sidebar__item">
                                                <h5 className="sidebar__title">Ratings</h5>
                                                <div className="sidebar-checkbox">
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-radio mr-10">
                                                            <div className="radio">
                                                                <input type="radio" name="radio" defaultChecked="checked" />
                                                                <div className="radio__mark">
                                                                    <div className="radio__icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title d-flex items-center">
                                                            <div className="d-flex x-gap-5 pr-10">
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                            </div>
                                                            4.5 &amp; up
                                                        </div>
                                                        <div className="sidebar-checkbox__count">(1991)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-radio mr-10">
                                                            <div className="radio">
                                                                <input type="radio" name="radio" defaultChecked="checked" />
                                                                <div className="radio__mark">
                                                                    <div className="radio__icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title d-flex items-center">
                                                            <div className="d-flex x-gap-5 pr-10">
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                            </div>
                                                            4.0 &amp; up
                                                        </div>
                                                        <div className="sidebar-checkbox__count">(200)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-radio mr-10">
                                                            <div className="radio">
                                                                <input type="radio" name="radio" defaultChecked="checked" />
                                                                <div className="radio__mark">
                                                                    <div className="radio__icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title d-flex items-center">
                                                            <div className="d-flex x-gap-5 pr-10">
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                            </div>
                                                            3.5 &amp; up
                                                        </div>
                                                        <div className="sidebar-checkbox__count">(300)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-radio mr-10">
                                                            <div className="radio">
                                                                <input type="radio" name="radio" defaultChecked="checked" />
                                                                <div className="radio__mark">
                                                                    <div className="radio__icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title d-flex items-center">
                                                            <div className="d-flex x-gap-5 pr-10">
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                                <div className="icon-star text-11 text-yellow-1" />
                                                            </div>
                                                            3.0 &amp; up
                                                        </div>
                                                        <div className="sidebar-checkbox__count">(500)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-sm-6">
                                            <div className="sidebar__item">
                                                <h5 className="sidebar__title">Instructors</h5>
                                                <div className="sidebar-checkbox">
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Jane Cooper</div>
                                                        <div className="sidebar-checkbox__count">(18)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Jenny Wilson</div>
                                                        <div className="sidebar-checkbox__count">(12)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Robert Fox</div>
                                                        <div className="sidebar-checkbox__count">(23)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Jacob Jones</div>
                                                        <div className="sidebar-checkbox__count">(67)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Albert Flores</div>
                                                        <div className="sidebar-checkbox__count">(34)</div>
                                                    </div>
                                                </div>
                                                <div className="sidebar__more mt-15">
                                                    <a href="#" className="text-14 fw-500 underline text-purple-1">Show more</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-sm-6">
                                            <div className="sidebar__item">
                                                <h5 className="sidebar__title">Price</h5>
                                                <div className="sidebar-checkbox">
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-radio mr-10">
                                                            <div className="radio">
                                                                <input type="radio" name="radio-2" defaultChecked="checked" />
                                                                <div className="radio__mark">
                                                                    <div className="radio__icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">All</div>
                                                        <div className="sidebar-checkbox__count">(18)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-radio mr-10">
                                                            <div className="radio">
                                                                <input type="radio" name="radio-2" defaultChecked="checked" />
                                                                <div className="radio__mark">
                                                                    <div className="radio__icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Free</div>
                                                        <div className="sidebar-checkbox__count">(12)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-radio mr-10">
                                                            <div className="radio">
                                                                <input type="radio" name="radio-2" defaultChecked="checked" />
                                                                <div className="radio__mark">
                                                                    <div className="radio__icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Paid</div>
                                                        <div className="sidebar-checkbox__count">(23)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-sm-6">
                                            <div className="sidebar__item">
                                                <h5 className="sidebar__title">Level</h5>
                                                <div className="sidebar-checkbox">
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">All Levels</div>
                                                        <div className="sidebar-checkbox__count">(18)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Beginner</div>
                                                        <div className="sidebar-checkbox__count">(12)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Intermediate</div>
                                                        <div className="sidebar-checkbox__count">(23)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Expert</div>
                                                        <div className="sidebar-checkbox__count">(67)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-sm-6">
                                            <div className="sidebar__item">
                                                <h5 className="sidebar__title">Languange</h5>
                                                <div className="sidebar-checkbox">
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">English</div>
                                                        <div className="sidebar-checkbox__count">(18)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">French</div>
                                                        <div className="sidebar-checkbox__count">(12)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">German</div>
                                                        <div className="sidebar-checkbox__count">(23)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Italian</div>
                                                        <div className="sidebar-checkbox__count">(67)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Turkish</div>
                                                        <div className="sidebar-checkbox__count">(34)</div>
                                                    </div>
                                                </div>
                                                <div className="sidebar__more mt-15">
                                                    <a href="#" className="text-14 fw-500 underline text-purple-1">Show more</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-sm-6">
                                            <div className="sidebar__item">
                                                <h5 className="sidebar__title">Duration</h5>
                                                <div className="sidebar-checkbox">
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">Less than 3 hours</div>
                                                        <div className="sidebar-checkbox__count">(18)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">4 - 7 hours</div>
                                                        <div className="sidebar-checkbox__count">(12)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">8 -18 hours </div>
                                                        <div className="sidebar-checkbox__count">(23)</div>
                                                    </div>
                                                    <div className="sidebar-checkbox__item">
                                                        <div className="form-checkbox">
                                                            <input type="checkbox" />
                                                            <div className="form-checkbox__mark">
                                                                <div className="form-checkbox__icon icon-check" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-checkbox__title">20 + Hours</div>
                                                        <div className="sidebar-checkbox__count">(67)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-30">

                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <a href="courses-single-1.html" className="coursesCard -type-1 px-10 py-10 border-light bg-white rounded-8">
                                <div className="relative">
                                    <div className="coursesCard__image overflow-hidden rounded-8">
                                        <img className="w-1/1" src="assets/img/coursesCards/1.png" alt="image" />
                                        <div className="coursesCard__image_overlay rounded-8" />
                                    </div>
                                    <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                                    </div>
                                </div>
                                <div className="h-100 px-10 pt-10">
                                    <div className="d-flex items-center">
                                        <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                                        <div className="d-flex x-gap-5 items-center">
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                        </div>
                                        <div className="text-13 lh-1 ml-10">(1991)</div>
                                    </div>
                                    <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">Learn Figma - UI/UX Design Essential Training</div>
                                    <div className="d-flex x-gap-10 items-center pt-10">
                                        <div className="d-flex items-center">
                                            <div className="mr-8">
                                                <img src="assets/img/coursesCards/icons/1.svg" alt="icon" />
                                            </div>
                                            <div className="text-14 lh-1">6 lesson</div>
                                        </div>
                                        <div className="d-flex items-center">
                                            <div className="mr-8">
                                                <img src="assets/img/coursesCards/icons/2.svg" alt="icon" />
                                            </div>
                                            <div className="text-14 lh-1">3h 56m</div>
                                        </div>
                                        <div className="d-flex items-center">
                                            <div className="mr-8">
                                                <img src="assets/img/coursesCards/icons/3.svg" alt="icon" />
                                            </div>
                                            <div className="text-14 lh-1">Beginner</div>
                                        </div>
                                    </div>
                                    <div className="coursesCard-footer">
                                        <div className="coursesCard-footer__author">
                                            <img src="assets/img/general/avatar-1.png" alt="image" />
                                            <div>Ali Tufan</div>
                                        </div>
                                        <div className="coursesCard-footer__price">
                                            <div>$179</div>
                                            <div>$79</div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <a href="courses-single-1.html" className="coursesCard -type-1 px-10 py-10 border-light bg-white rounded-8">
                                <div className="relative">
                                    <div className="coursesCard__image overflow-hidden rounded-8">
                                        <img className="w-1/1" src="assets/img/coursesCards/1.png" alt="image" />
                                        <div className="coursesCard__image_overlay rounded-8" />
                                    </div>
                                    <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                                    </div>
                                </div>
                                <div className="h-100 px-10 pt-10">
                                    <div className="d-flex items-center">
                                        <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                                        <div className="d-flex x-gap-5 items-center">
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                        </div>
                                        <div className="text-13 lh-1 ml-10">(1991)</div>
                                    </div>
                                    <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">Learn Figma - UI/UX Design Essential Training</div>
                                    <div className="d-flex x-gap-10 items-center pt-10">
                                        <div className="d-flex items-center">
                                            <div className="mr-8">
                                                <img src="assets/img/coursesCards/icons/1.svg" alt="icon" />
                                            </div>
                                            <div className="text-14 lh-1">6 lesson</div>
                                        </div>
                                        <div className="d-flex items-center">
                                            <div className="mr-8">
                                                <img src="assets/img/coursesCards/icons/2.svg" alt="icon" />
                                            </div>
                                            <div className="text-14 lh-1">3h 56m</div>
                                        </div>
                                        <div className="d-flex items-center">
                                            <div className="mr-8">
                                                <img src="assets/img/coursesCards/icons/3.svg" alt="icon" />
                                            </div>
                                            <div className="text-14 lh-1">Beginner</div>
                                        </div>
                                    </div>
                                    <div className="coursesCard-footer">
                                        <div className="coursesCard-footer__author">
                                            <img src="assets/img/general/avatar-1.png" alt="image" />
                                            <div>Ali Tufan</div>
                                        </div>
                                        <div className="coursesCard-footer__price">
                                            <div>$179</div>
                                            <div>$79</div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <a href="courses-single-1.html" className="coursesCard -type-1 px-10 py-10 border-light bg-white rounded-8">
                                <div className="relative">
                                    <div className="coursesCard__image overflow-hidden rounded-8">
                                        <img className="w-1/1" src="assets/img/coursesCards/1.png" alt="image" />
                                        <div className="coursesCard__image_overlay rounded-8" />
                                    </div>
                                    <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                                    </div>
                                </div>
                                <div className="h-100 px-10 pt-10">
                                    <div className="d-flex items-center">
                                        <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                                        <div className="d-flex x-gap-5 items-center">
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                            <div className="icon-star text-9 text-yellow-1" />
                                        </div>
                                        <div className="text-13 lh-1 ml-10">(1991)</div>
                                    </div>
                                    <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">Learn Figma - UI/UX Design Essential Training</div>
                                    <div className="d-flex x-gap-10 items-center pt-10">
                                        <div className="d-flex items-center">
                                            <div className="mr-8">
                                                <img src="assets/img/coursesCards/icons/1.svg" alt="icon" />
                                            </div>
                                            <div className="text-14 lh-1">6 lesson</div>
                                        </div>
                                        <div className="d-flex items-center">
                                            <div className="mr-8">
                                                <img src="assets/img/coursesCards/icons/2.svg" alt="icon" />
                                            </div>
                                            <div className="text-14 lh-1">3h 56m</div>
                                        </div>
                                        <div className="d-flex items-center">
                                            <div className="mr-8">
                                                <img src="assets/img/coursesCards/icons/3.svg" alt="icon" />
                                            </div>
                                            <div className="text-14 lh-1">Beginner</div>
                                        </div>
                                    </div>
                                    <div className="coursesCard-footer">
                                        <div className="coursesCard-footer__author">
                                            <img src="assets/img/general/avatar-1.png" alt="image" />
                                            <div>Ali Tufan</div>
                                        </div>
                                        <div className="coursesCard-footer__price">
                                            <div>$179</div>
                                            <div>$79</div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                    
                </div>
            </section>

        </>

    )
}
