import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvideo from '../components/Addvideo'
import Videos from '../components/Videos'
import Catagory from '../components/Catagory'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='d-flex justify-content-between p-4'>
    <h1>videos</h1>
    <Link to={'/his'}>watch history</Link>
    </div>
    <div className='container-fluid'>
    <Row>


      <Col sm={12} md={1}>
      <Addvideo/>
      </Col>


      <Col sm={12} md={8}>
      <Videos/>
      </Col>


      <Col sm={12} md={3}>
      <Catagory/>
      </Col>


    </Row>
    </div>
    </>

  )
}

export default Home