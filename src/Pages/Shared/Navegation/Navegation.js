import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../images/modernLogo.png'
import { Link } from 'react-router-dom';

const Navegation = () => {
    return (
       
            <Navbar bg="light" expand="lg">
              <Container>
              <Navbar.Brand href="#home" style={{color:'#A25B0F'}} className='fw-bold'>
            <img
              alt=""
              src={Logo}
              style={{borderRadius:'50%'}}
              width="50"
              height="50"
              className="d-inline-block align-center ms-auto mx-2"
            />
            Modern Furniture
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="ms-auto my-2 my-lg-0 fw-bold"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                   
                  >
                 <Link to='/'  className='text-decoration-none fw-bold'> <Nav.Link href="#action1">Home</Nav.Link></Link>  
                <Link to="furniture" className='text-decoration-none fw-bold'><Nav.Link href="#action1">Furniture</Nav.Link></Link> 
                <Link to="about" className='text-decoration-none fw-bold'>      <Nav.Link href="#action1">About</Nav.Link></Link> 
                    <Nav.Link href="#action1">Blog</Nav.Link>
                    <Link to="login" className='text-decoration-none fw-bold'>  <Nav.Link href="#action1">LogIn</Nav.Link></Link> 
                    
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
         
    );
};

export default Navegation;