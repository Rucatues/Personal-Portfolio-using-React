import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <div class="fixed-bottom">
            <footer class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="https://github.com/Rucatues">
                    <BsGithub />
                </a>
                <a class="navbar-brand" href="https://www.linkedin.com/in/kelly-m-592a2645/">
                    < BsLinkedin />
                </a>
            </footer>
        </div>
    )
}

export default Footer