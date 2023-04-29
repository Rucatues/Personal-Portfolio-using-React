import React from 'react'
import resume from '/Users/kellymclain/bootcamp/Homework/Personal-Portfolio-using-React/src/components/images/resume.png'

function Resume() {
    return (
        <div className="images hero-image">
            <a href={resume} download> <img src={resume} /> </a>
        </div>
    )
}

export default Resume