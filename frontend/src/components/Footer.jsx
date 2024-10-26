import React from 'react'
import { Container, Row, Col, Stack, Image, Nav, NavLink} from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer>
        <Container fluid>
            <Row className='bg-dark text-white pt-3'>
                <Col sm={12} md={4} className="mx-5">
                    <Stack>
                        <h2>Wiliams Realty</h2>
                        <p>Tagline (tbd)</p>
                    </Stack>
                </Col>
                <Col sm={12} md={4}>
                    <Nav className='flex-column fs-5'>
                        <h3 className='ms-3'>Useful Links</h3>
                        <NavLink href='#' className='text-white fs-6'>Home</NavLink>
                        <NavLink href='#' className='text-white fs-6'>About</NavLink>
                        <NavLink href='#' className='text-white fs-6'>Listings</NavLink>
                        <NavLink href='#' className='text-white fs-6'>Contact</NavLink>
                        <NavLink href='#' className='text-white fs-6'>Contact</NavLink>
                    </Nav>
                </Col>
                <Col sm={12} md={3}>
                    <h3>Contact us:</h3>
                    <p>info@williamsrealty.com</p>
                    <p>(888)123-4567</p>
                </Col>
            </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
