import React from 'react'

const Navbar = ({ setCurrentPage, currentPage }) => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Kelly</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" onClick={() => setCurrentPage('About')}>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => setCurrentPage('Contact')}>Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => setCurrentPage('Portfolio')}>Portfolio</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar