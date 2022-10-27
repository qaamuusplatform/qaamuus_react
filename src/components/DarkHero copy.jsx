import React from 'react'

export default function DarkHero() {
  return (

  <section className="masthead -type-1 js-mouse-move-container">
    <div className="masthead__bg">
      <img src="assets/img/home-1/hero/bg.png" alt="image" />
    </div>
    <div className="container">
      <div data-anim-wrap className="row y-gap-30 justify-between items-end">
        <div className="col-xl-6 col-lg-6 col-sm-10">
          <div className="masthead__content">
            <h1  className="masthead__title">
              Learn New Skills Online
              with Top <span className="text-green-1 underline">Educators</span>
            </h1>
            <p  className="masthead__text">
              Build skills with courses, certificates, and degrees online from<br />
              world-class universities and companies.
            </p>
            <div  className="masthead__buttons row x-gap-10 y-gap-10">
              <div className="col-12 col-sm-auto">
                <a  href="signup.html" className="button -md -purple-1 text-white">Join For Free</a>
              </div>
              <div className="col-12 col-sm-auto">
                <a  href="courses-list-1.html" className="button -md -outline-green-1 text-green-1">Find Courses</a>
              </div>
            </div>
            <div  className="masthead-info row y-gap-15 sm:d-none">
              <div className="masthead-info__item d-flex items-center text-white">
                <div className="masthead-info__icon mr-10">
                  <img src="assets/img/masthead/icons/1.svg" alt="icon" />
                </div>
                <div className="masthead-info__title lh-1">Over 12 million students</div>
              </div>
              <div className="masthead-info__item d-flex items-center text-white">
                <div className="masthead-info__icon mr-10">
                  <img src="assets/img/masthead/icons/2.svg" alt="icon" />
                </div>
                <div className="masthead-info__title lh-1">More than 60,000 courses</div>
              </div>
              <div className="masthead-info__item d-flex items-center text-white">
                <div className="masthead-info__icon mr-10">
                  <img src="assets/img/masthead/icons/3.svg" alt="icon" />
                </div>
                <div className="masthead-info__title lh-1">Learn anything online</div>
              </div>
            </div>
          </div>
        </div>
        <div  className="col-xl-6 col-lg-6">
          <div className="masthead-image">
            <div className="masthead-image__el1">
              <img className="js-mouse-move" data-move={40} src="assets/img/masthead/1.png" alt="image" />
              <div  className="lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move">
                <div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
                  <img src="assets/img/masthead/1.svg" alt="icon" />
                </div>
                <div className="ml-20">
                  <div className="text-orange-1 text-16 fw-500 lh-1">3.000 +</div>
                  <div className="mt-3">Free Courses</div>
                </div>
              </div>
            </div>
            <div className="masthead-image__el2">
              <img className="js-mouse-move" data-move={70} src="assets/img/masthead/2.png" alt="image" />
              <div  className="lg:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move">
                <img src="assets/img/masthead/4.png" alt="icon" />
                <div className="ml-20">
                  <div className="text-dark-1 text-16 fw-500 lh-1">Ali Tufan</div>
                  <div className="mt-3">UX/UI Designer</div>
                  <div className="d-flex x-gap-5 mt-3">
                    <div>
                      <div className="icon-star text-yellow-1 text-11" />
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11" />
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11" />
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11" />
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="masthead-image__el3">
              <img className="js-mouse-move" data-move={40} src="assets/img/masthead/3.png" alt="image" />
              <div  className="shadow-4 img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 js-mouse-move">
                <div className="img-el__side">
                  <div className="size-50 d-flex justify-center items-center bg-purple-1 rounded-full">
                    <img src="assets/img/masthead/2.svg" alt="icon" />
                  </div>
                </div>
                <div className>
                  <div className="text-purple-1 text-16 fw-500 lh-1">Congrats!</div>
                  <div className="mt-3">Your Admission Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </section>


  )
}
