import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideos } from '../services/allApis';
import { toast } from 'react-toastify';


function Addvideo() {
    const [show, setShow] = useState(false);
    const [video,setVideo]=useState({
      videoId:"",title:"",imageUrl:"",videoUrl:""
    })
    const handleUpload=async()=>{
      console.log(video);
      const {videoId,title,imageUrl,videoUrl}=video
      if(!videoId || !title || !imageUrl||!videoUrl){
        toast.warning("Please enter valid input")
      }
      else{
        try{
          const vurl=videoUrl.split("v=")[1]
          const eurl=`https://www.youtube.com/embed/${vurl}?si=_J2A_eQl6nh7ZVzI&autoplay=1`        
          video.videoUrl=eurl
        const res=await addVideos(video)
        console.log(res)
        if(res.status==201){
          toast.success("upload successfull!!")
          handleClose();
        }
        else{
          toast.error("upload failed")
        }

        }
        catch(err){
          console.log(err)
          toast.error("Upload Failed")

        }
      }
      
    }
    

    const handleClose = () =>
       {setShow(false);
       setVideo({
        videoId:"",title:"",imageUrl:"",videoUrl:""
      })}
    const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn'><i  className="fa-solid fa-square-plus fa-2xl" style={{color: "#FFD43B",}} onClick={handleShow}/></button>

   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingId" label="Video id" className="mb-3">
        <Form.Control type="number" placeholder="" onChange={(e)=>{setVideo({...video,videoId:e.target.value})}}/>
      </FloatingLabel>
      
      <FloatingLabel controlId="vtitle" label="Video title" className="mb-3">
        <Form.Control type="text" placeholder="" onChange={(e)=>{setVideo({...video,title:e.target.value})}}/>
      </FloatingLabel>

      <FloatingLabel controlId="imgurl" label="image url" className="mb-3">
        <Form.Control type="text" placeholder="" onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}}/>
      </FloatingLabel>

      <FloatingLabel controlId="vurl" label="Video url" className="mb-3">
        <Form.Control type="text" placeholder="" onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}}/>
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpload}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   
  )
}

export default Addvideo