import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './componentStyles.css';

const Header = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-light-blue" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">Williams Realty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="justify-content-end">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/listings">Listings</Nav.Link>
                        <Nav.Link as={Link} to="/">About</Nav.Link>
                        <Nav.Link as={Link} to="/">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header
