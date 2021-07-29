import React from 'react'
import '../NavBar/NavBar.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="NavBar">
            <nav>
                    <ul >
                            <li>
                                <a> <Link to="/">Home</Link></a>
                            </li>
                            <li>
                                <a><Link to="/about">About</Link></a>
                            </li>
                            <li>
                                <a><Link to="/skills">Skills</Link></a>
                            </li>
                            <li>
                                <a><Link to="/youtube">YouTube</Link></a>
                            </li>
                            <li>
                                <a><Link to="/contact">Contact</Link></a>
                            </li>
                    </ul>
            </nav>
        </div>
    )
}
