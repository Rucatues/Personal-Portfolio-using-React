import React from 'react'

const Navbar = ({ setCurrentPage, currentPage }) => {
    return (
        <div>
            <a onClick={() => setCurrentPage('About')}>About</a>
            <a onClick={() => setCurrentPage('Contact')}>Contact</a>
            <a onClick={() => setCurrentPage('Portfolio')}>Portfolio</a>
        </div>
    )
}

export default Navbar