import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth);

    const handSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" className='navbar-color' >
            <Container className='nav-width'>
                <a className='Brand' href="/">Career way</a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='nav-bg' id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-title' to="/">Home</Link>
                        <a className='nav-title' href="/#services" >Services</a>
                        <Link className='nav-title' to="/blogs">Blogs</Link>

                    </Nav>
                    <Nav>
                        <Link className='nav-title' to="/about">About</Link>
                        {
                            user ?
                                <button style={{ 'margin-left': '5px', 'padding': '0px 10px', 'background-color': '#375f00', 'color': '#fff', 'border': 'none' }} onClick={handSignOut}>Signout</button>
                                :
                                <Link className='nav-title' to="/signin">Sign In</Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;