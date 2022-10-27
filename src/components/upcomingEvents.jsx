import React from 'react'

export default function UpcomingEvents() {
    return (
        <section className="layout-pt-lg layout-pb-lg bg-light-3">
            <div className="container">
                <div className="row y-gap-15 justify-between items-end">
                    <div className="col-lg-6">
                        <div className="sectionTitle ">
                            <h2 className="sectionTitle__title ">Upcoming Events</h2>
                            <p className="sectionTitle__text ">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>

                </div>

                <div className="row y-gap-30">
                    <div className="col-lg-3 col-md-6">
                        <div className="eventCard -type-1">
                            <div className="eventCard__img">
                                <img src="assets/img/home-2/events/1.png" alt="image" />
                            </div>
                            <div className="eventCard__bg bg-white">
                                <div className="eventCard__content y-gap-10">
                                    <div className="eventCard__inner">
                                        <h4 className="eventCard__title text-17 fw-500">
                                            Summer School 2022
                                        </h4>
                                        <div className="d-flex x-gap-15 pt-10">
                                            <div className="d-flex items-center">
                                                <div className="icon-calendar-2 text-16 mr-8" />
                                                <div className="text-14">6 April, 2022</div>
                                            </div>
                                            <div className="d-flex items-center">
                                                <div className="icon-location text-16 mr-8" />
                                                <div className="text-14">London, UK</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eventCard__button">
                                        <a href="#" className="button -sm -rounded -purple-1 text-white px-25">Buy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="eventCard -type-1">
                            <div className="eventCard__img">
                                <img src="assets/img/home-2/events/2.png" alt="image" />
                            </div>
                            <div className="eventCard__bg bg-white">
                                <div className="eventCard__content y-gap-10">
                                    <div className="eventCard__inner">
                                        <h4 className="eventCard__title text-17 fw-500">
                                            Summer School 2022
                                        </h4>
                                        <div className="d-flex x-gap-15 pt-10">
                                            <div className="d-flex items-center">
                                                <div className="icon-calendar-2 text-16 mr-8" />
                                                <div className="text-14">6 April, 2022</div>
                                            </div>
                                            <div className="d-flex items-center">
                                                <div className="icon-location text-16 mr-8" />
                                                <div className="text-14">London, UK</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eventCard__button">
                                        <a href="#" className="button -sm -rounded -purple-1 text-white px-25">Buy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div data-anim="slide-left delay-4" className="eventCard -type-1">
                            <div className="eventCard__img">
                                <img src="assets/img/home-2/events/3.png" alt="image" />
                            </div>
                            <div className="eventCard__bg bg-white">
                                <div className="eventCard__content y-gap-10">
                                    <div className="eventCard__inner">
                                        <h4 className="eventCard__title text-17 fw-500">
                                            Summer School 2022
                                        </h4>
                                        <div className="d-flex x-gap-15 pt-10">
                                            <div className="d-flex items-center">
                                                <div className="icon-calendar-2 text-16 mr-8" />
                                                <div className="text-14">6 April, 2022</div>
                                            </div>
                                            <div className="d-flex items-center">
                                                <div className="icon-location text-16 mr-8" />
                                                <div className="text-14">London, UK</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eventCard__button">
                                        <a href="#" className="button -sm -rounded -purple-1 text-white px-25">Buy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div data-anim="slide-left delay-5" className="eventCard -type-1">
                            <div className="eventCard__img">
                                <img src="assets/img/home-2/events/4.png" alt="image" />
                            </div>
                            <div className="eventCard__bg bg-white">
                                <div className="eventCard__content y-gap-10">
                                    <div className="eventCard__inner">
                                        <h4 className="eventCard__title text-17 fw-500">
                                            Summer School 2022
                                        </h4>
                                        <div className="d-flex x-gap-15 pt-10">
                                            <div className="d-flex items-center">
                                                <div className="icon-calendar-2 text-16 mr-8" />
                                                <div className="text-14">6 April, 2022</div>
                                            </div>
                                            <div className="d-flex items-center">
                                                <div className="icon-location text-16 mr-8" />
                                                <div className="text-14">London, UK</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eventCard__button">
                                        <a href="#" className="button -sm -rounded -purple-1 text-white px-25">Buy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="row pt-60 lg:pt-40">
                    <div className="col-auto">
                        <a href="#" className="button -icon -outline-purple-1 text-purple-1 fw-500">
                            View All Events
                            <span className="icon-arrow-top-right text-14 ml-10" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
