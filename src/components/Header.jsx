import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          {' '}
            <h3 style={{color:'black'}}>           <i className="fa-solid fa-upload fa-bounce fa-lg me-3" style={{color: "#ff9500"}}></i>
             MEDIA PLAYER</h3>
          </Navbar.Brand>
        </Container>
      </Navbar></>
  )
}

export default Header