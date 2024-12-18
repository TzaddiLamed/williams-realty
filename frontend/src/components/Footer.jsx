import React from 'react'
import { Container, Row, Col, Stack, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './componentStyles.css';

const Footer = () => {
  return (
    <>
      <footer>
        <Container fluid>
            <Row className='bg-light-blue text-black pt-4'>
                <Col sm={12} md={4} className="text-center mb-3">
                    <Stack>
                        <h2 className='footer-brand'>Wiliams Realty</h2>
                        <p>Let us help you find your dream home.</p>
                    </Stack>
                </Col>
                <Col sm={12} md={4} className="d-flex flex-column align-items-center mb-3">
                    <Nav className='flex-column fs-5 text-center'>
                        <h4 className='ms-3'>Useful Links</h4>
                        <Nav.Link as={Link} to='/' className='text-black fs-6 foot-nav-item'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/' className='text-black fs-6 foot-nav-item'>About</Nav.Link>
                        <Nav.Link as={Link} to='/listings' className='text-black fs-6 foot-nav-item'>Listings</Nav.Link>
                        <Nav.Link as={Link} to='/' className='text-black fs-6 foot-nav-item'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/' className='text-black fs-6 foot-nav-item'>Contact</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={12} md={3} className="text-center mb-3">
                    <h4>Contact us:</h4>
                    <p>info@williamsrealty.com</p>
                    <p>(888)123-4567</p>
                </Col>
            </Row>
            <Row className='bg-light-blue text-black pt-3 pb-2 text-center'>
                <p className="copy-info">&copy; 2021 Williams Realty. All rights reserved</p>
            </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
