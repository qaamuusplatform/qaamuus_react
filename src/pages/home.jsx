import React from 'react'
import AboutQaamuus from '../components/aboutQaamuus'
import DarkHero from '../components/DarkHero'
import Footer from '../components/Footer'
import Header from '../components/header'
import InternationalFriends from '../components/internationalFriends'
import LightHero from '../components/lightHero'
import PopularCourses from '../components/popularCourses'
import UpcomingEvents from '../components/upcomingEvents'

export default function Home() {
    return (
        <>
            <Header />
            <div className="content-wrapper  js-content-wrapper">
                <LightHero/>
                <AboutQaamuus/>
                <PopularCourses/>
                <InternationalFriends/>
                <UpcomingEvents/>
                <Footer />
            </div>
        </>
    )
}
