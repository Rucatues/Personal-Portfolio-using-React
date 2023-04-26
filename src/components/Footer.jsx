import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <div class="container fixed-bottom">
            <footer class="d-flex flex-wrap justify-content-end py-3 my-4 border-top">
                <div class="d-flex">
                    <ul class="nav d-flex">
                        <li class="ms-3">
                            <a class="text-muted" href="https://github.com/Rucatues">
                                <BsGithub size="2em" />
                            </a>
                        </li>
                        <li class="ms-3">
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