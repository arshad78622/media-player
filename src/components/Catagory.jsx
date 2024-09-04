import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../services/allApis';
import { toast } from 'react-toastify';
import Categorylist from './Categorylist';

function Catagory() {
    const [show, setShow] = useState(false);
    const [category,setCategory]=useState({
      categoryId:"",title:"",videos:[]
    })
const handleCategory=async()=>{
  console.log(category);
  const{categoryId,title}=category
  if(!categoryId ||!title){
    toast.warning("enter valid inputs")
  }
  else{
    const result=await addCategory(category)
    console.log(result);
    if (result.status==201){
      toast.success("category added")
    }
    else{
      toast.error("category adding failed")
    }
    
  }
  
}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-grid'>
        <button className='btn btn-success' onClick={handleShow}>add catagory</button>
    </div>

       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add catagory</Modal.Title>
        </Modal.Header>

        <Modal.Body> <FloatingLabel controlId="floatingId" label="Catagory id" className="mb-3">
        <Form.Control type="number" onChange={(e)=>setCategory({...category,categoryId:e.target.value})} placeholder="" />
      </FloatingLabel>
      
      <FloatingLabel controlId="vtitle" label="catagory title" className="mb-3">
        <Form.Control type="text" onChange={(e)=>setCategory({...category,title:e.target.value})} placeholder="" />
      </FloatingLabel>
      </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategory}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>


    <Categorylist/>
    </>
  )
}

export default Catagory