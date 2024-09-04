import React from 'react'
import { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Row,Col } from 'react-bootstrap'
import { getVideos } from '../services/allApis'



function Videos() {
  const [videos,setVideos]=useState([])

     useEffect (()=>{
       getData()
       },[])

  const getData = async()=>{
  const res=await getVideos()
  console.log(res);
  if(res.status=200){
    setVideos(res.data)
  }
  else{
    console.log("error");
    
  }
  
}

  return (
   <>
   <div className='border border-3 shadow p-5 mb-3'>
     {
     videos.length>0 ?
     <Row>
      {
     videos.map(item=>(
      <Col className='mb-4'>
        <Videocard video={item}/>
     </Col>
     ))
      }
   </Row> 
   :
   <h3>No Videos Available</h3>
    }
   </div>
   </>
  )
}

export default Videos