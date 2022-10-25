import React from 'react'
import DarkHero from '../components/DarkHero'
import Footer from '../components/Footer'
import Header from '../components/header'

export default function Home() {
    return (
        <>
            <Header />
            <div className="content-wrapper  js-content-wrapper">
                <DarkHero/>
            </div>
            <Footer />
        </>
    )
}
