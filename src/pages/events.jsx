import React from 'react'
import EventsList from '../components/eventsList'
import Header from '../components/header'

export default function Events() {
    return (
        <>  
            <Header />
            <div className="content-wrapper  js-content-wrapper">
                <EventsList/>

            </div>
        </>
    )
}
