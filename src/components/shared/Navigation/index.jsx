import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const styles = {
        color:'white',
        fontWeight:'bold',
        fontSize:'16px',
        padding:'8px',
        cursor:'pointer',
        textDecoration:'none'
    };
    const brandStyles = {
        color:'white',
        fontWeight:'bolder',
        fontSize:'20px',
        padding:'8px',
        cursor:'pointer',
        textDecoration:'none'
    }
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link style={brandStyles} to="/">Tour Insta</Link>
            <Nav className="ms-auto">
              <Link style={styles} to="/">Home</Link>
              <Link style={styles}  to="/hotels">Hotels</Link>
              <Link style={styles} to="/booking">Booking</Link>
              <Link style={styles} to="/login">Login</Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
};

export default Navigation;