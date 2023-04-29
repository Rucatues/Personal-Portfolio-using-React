import React from 'react'

const Navbar = ({ setCurrentPage, currentPage }) => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg sticky-top">
                <a className="navbar-brand" href="#">Kelly</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a class="nav-link" onClick={() => setCurrentPage('About')}>About</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" onClick={() => setCurrentPage('Contact')}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" onClick={() => setCurrentPage('Portfolio')}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" onClick={() => setCurrentPage('Resume')}>Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
};

export default Navbar