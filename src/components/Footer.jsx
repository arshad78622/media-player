import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='bg-light p-3 container-fluid'>
        <Row>

            <Col sm={12} md={5}>
            <h1>MEDIA PLAYER 2024</h1>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque necessitatibus sequi ipsam, ut nemo error optio mollitia, expedita in blanditiis reprehenderit est harum dolorum doloribus a sapiente consectetur maxime!</p>
            </Col>

            <Col sm={12} md={2} >
            <h1>LINKS</h1>
            <div className='d-flex flex-column'>
            <Link to={'/'}>LANDING</Link>
            <Link to={'/home'}>HOME</Link>
            <Link to={'/his'}>WATCH HISTORY</Link>
            </div>
            </Col>

            <Col sm={12} md={5}>
            <h1>FEEDBACK</h1>
            <textarea name="" id="" className='form-control'></textarea>
            <button className='btn btn-info mt-4 mb-4'>Send</button>
            </Col>
        </Row>
        <h6 className='text-center mt-2 mb-4'>Mediaplayer 2024 &copy; All rights reserved</h6>
    </div>
    </>
  )
}

export default Footer