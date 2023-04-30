import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className="container fixed-bottom">
            <footer className="d-flex flex-wrap justify-content-end py-3 my-4">
                <div className="d-flex">
                    <ul className="nav d-flex">
                        <li className="ms-3">
                            <a class="text-muted" href="https://github.com/Rucatues">
                                <BsGithub size="2em" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a class="text-muted" href="https://www.linkedin.com/in/kelly-m-592a2645/">
                                < BsLinkedin size="2em" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>

    )
}

export default Footer