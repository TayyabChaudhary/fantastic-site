import React from 'react';
import './section1.scss';
export default function section1() {
    return (
        <div>
            <nav className="navbar">
                <h2 className="is-size-3 blinking">Tayy Eb Chaudhary</h2>
                <ul>
                    <li>
                        <a href="#!">Home</a>
                    </li>
                    <li>
                        <a href="#!">Services</a>
                    </li>
                    <li>
                        <a href="#!">Contact</a>
                    </li>
                    <li>
                        <a href="#!">Gallery</a>
                    </li>
                    <li>
                        <a href="#!">Product</a>
                    </li>
                    <li>
                        <a href="#!">
                            <i className="fa fa-search is-size-4" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#!"> <i className="fa fa-youtube-play is-size-4" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <i className="fa fa-user is-size-4" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
