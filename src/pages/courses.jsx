import React from 'react'
import CoursesList from '../components/coursesList'
import Footer from '../components/Footer'
import Header from '../components/header'

export default function Courses() {
    return (
        <div>  
            <Header />
            <div className="content-wrapper  js-content-wrapper">
                <CoursesList/>
                <Footer />
            </div>
        </div>
    )
}
