import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
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
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/listings">Listings</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header
