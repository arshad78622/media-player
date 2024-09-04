import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  
  const nav=useNavigate()


  const lgout=()=>{
    nav('/')
    sessionStorage.removeItem('userData')
  }

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
        <button className='btn btn-danger' onClick={lgout}>logout</button>
      </Navbar></>
  )
}

export default Header