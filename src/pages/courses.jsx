import React from 'react'
import CoursesList from '../components/coursesList'
import Header from '../components/header'

export default function Courses() {
    return (
        <>  
            <Header />
            <div className="content-wrapper  js-content-wrapper">
                <CoursesList/>
            </div>
        </>
    )
}
