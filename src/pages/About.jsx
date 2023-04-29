import React from 'react'

const About = () => {
    return (
        <div>
            <div className="col-md-6">
                <div className="hero">
                    <h1 className="hero-inner">
                        Hi, my name is <span className="name">Kelly</span> and I am a web
                        developer based in Austin, TX.
                    </h1>
                </div>

                <p className="about">
                    After a decade of working as a <a href="https://en.wikipedia.org/wiki/Maternal%E2%80%93fetal_medicine" class="MFM">Maternal Fetal Medicine</a> nurse, I made
                    the decision to discover the world of web development. Working in telemedicine and using inaccessible and archaic EMR software sparked my interest to learn more about how websites and software are built and designed.
                    My dream is to one day combine my knowledge of healthcare and technology to design an app that pulls data from a patient's chart and can triage their current issue without the need to call a provider's office. I am now
                    looking for a junior dev position to kickstart my career and I am ready to learn among professionals!
                </p>
            </div>

        </div>
    )
}

export default About