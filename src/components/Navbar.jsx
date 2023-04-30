import React from 'react'

const Navbar = ({ setCurrentPage, currentPage }) => {

    function aboutPage() {
        setCurrentPage('About');
        document.getElementById("about").classList.add('active');
        document.getElementById("contact").classList.remove('active');
        document.getElementById("portfolio").classList.remove('active');
        document.getElementById("resume").classList.remove('active');
    };

    function contactPage() {
        setCurrentPage('Contact');
        document.getElementById("contact").classList.add('active');
        document.getElementById("about").classList.remove('active');
        document.getElementById("portfolio").classList.remove('active');
        document.getElementById("resume").classList.remove('active');
    };

    function portfolioPage() {
        setCurrentPage('Portfolio');
        document.getElementById("portfolio").classList.add('active');
        document.getElementById("about").classList.remove('active');
        document.getElementById("contact").classList.remove('active');
        document.getElementById("resume").classList.remove('active');
    };

    function resumePage() {
        setCurrentPage('Resume');
        document.getElementById("resume").classList.add('active');
        document.getElementById("about").classList.remove('active');
        document.getElementById("contact").classList.remove('active');
        document.getElementById("portfolio").classList.remove('active');
    }

    return (
        <div>

            <nav className="navbar navbar-expand-lg sticky-top">
                <a className="navbar-brand km" onClick={aboutPage}>Km.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a class="nav-link" id="about" onClick={aboutPage} activeStyle={{ color: "blue" }}>About</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" id="contact" onClick={contactPage}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" id="portfolio" onClick={portfolioPage}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" id="resume" onClick={resumePage}>Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
};

export default Navbar