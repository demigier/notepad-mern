import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import * as ReactBootStrap from 'react-bootstrap'

import Logo from '../assets/Notepad.png';

export const Navbar = () => {
    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="container">
                <Link to='/' className='text-white' style={{ textDecoration: 'none', marginRight: "20px" }}>
                    <img width='30' alt='logo' src={String(Logo)} /> NotePad
                </Link>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <div> <SearchBar /> </div>
                    <ReactBootStrap.Nav style={{ marginLeft: 'auto' }}>
                        <Link to="/" className='text-white' style={{ textDecoration: 'none', marginRight: "20px" }}>
                            <FontAwesomeIcon icon="list" /> My List
                        </Link>
                        <Link to="/new-note" className='text-white' style={{ textDecoration: 'none', marginRight: "20px" }}>
                            <FontAwesomeIcon icon="plus-square" /> Add Note
                        </Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </div>
        </ReactBootStrap.Navbar>
    )
}