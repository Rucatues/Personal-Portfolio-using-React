import React from 'react'

const Navbar = ({ setCurrentPage, currentPage }) => {

    function aboutPage() {
        setCurrentPage('About');
        document.getElementById("about").classList.add('active');
    };

    function contactPage() {
        setCurrentPage('Contact');
    };

    function portfolioPage() {
        setCurrentPage('Portfolio')
    };

    function resumePage() {
        setCurrentPage('Resume')
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
                            <a class="nav-link" id="about" onClick={aboutPage}>About</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" onClick={contactPage}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" onClick={portfolioPage}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" onClick={resumePage}>Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
};

export default Navbar