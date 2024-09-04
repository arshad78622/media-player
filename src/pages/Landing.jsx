import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
    return (
        <>
            <div className='container-fluid'>
                <Row>
                    <Col md={7} className='p-5'>
                        <h1>MEDIA PLAYER 2024</h1>
                        <p style={{ textAlign: "justify" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, nihil magnam illum vero voluptatibus tempora quas voluptatum perferendis laborum impedit libero fugit eius, ipsa itaque aperiam quam ea at. Magnam!</p>
                        <div className='d-grid'>
                            <Link to={'/login'} className='btn btn-success mb-4'>Goto Home</Link>
                        </div>
                    </Col>

                    <Col md={5} className='p-5'>
                        <img src="https://img.freepik.com/premium-vector/video-media-player-icon-laptop-computer-concept-flat-vector-illustration_545399-1770.jpg" alt="introIMG" className='img-fluid' style={{ width: '500px' }} />
                    </Col>
                </Row>
            </div>

            <div className='container-fluid mt-5'>
                
                    <h2 className='text-center my-3'>FEATURES</h2>
                    <div className='p-4 d-flex justify-content-around'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{height:'250px'}} src="https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_400px.gif" />
                            <Card.Body>
                                <Card.Title>Add vedios</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{height:'250px'}} src="https://cdn.dribbble.com/users/267700/screenshots/4437373/dribbs_shopping.gif" />
                            <Card.Body>
                                <Card.Title>Add catagories</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{height:'250px'}} variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c0aabe76244561.5c7703c5dd17a.gif" />
                            <Card.Body>
                                <Card.Title>watch history</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
            </div>
            <div className='p-4'>
               <Row>
                 <Col sm={12} md={7} className='p-2' style={{paddingLeft:'80px'}}>
                 <h2 >simple and faster</h2>
                 <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aliquam architecto molestiae vitae, eos quas, distinctio, optio voluptates consequatur accusamus dolorem odio officia saepe sed! In provident repudiandae at facere.lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex, voluptatum officia repellat totam tempora est odit eaque explicabo quibusdam enim asperiores maiores? Nostrum accusantium architecto, totam sint hic repudiandae!</p>
                 </Col>

                 <Col sm={12} md={5} style={{paddingLeft:'80px'}}>
                 <iframe id='a1' className='ms-5' width="400" height="315" src="https://www.youtube.com/embed/SqcY0GlETPk?si=GrrdTlqkJ1m2fu5f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 </Col>

               </Row>
            </div>
        </>
    )
}

export default Landing