import React from 'react'
import EventsList from '../components/eventsList'
import Footer from '../components/Footer'
import Header from '../components/header'

export default function Events() {
    return (
        <>  
            <Header />
            <div className="content-wrapper  js-content-wrapper">
                <EventsList/>

                <Footer />
            </div>
        </>
    )
}
