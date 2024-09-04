import React,{useEffect,useState} from 'react'
import { getCategories } from '../services/allApis'

function Categorylist() {
    const [categoryList,setCategoryList]=useState([])

useEffect(()=>{
    getData()
},[])

    const getData=async()=>{
        const result =await getCategories()
        console.log(result);
        if(result.status==201){
            setCategoryList(result.data)
        }
        
    }
  return (
<>
<div className='container-fluid border border-3 border-light p-2 mt-3'>
   {
    categoryList.length>0 ?
    <div>
        {
            categoryList.map(item=>(
                <div className='m-2 p-3 border d-flex justify-content-between'>
                     <h5>{item.title}</h5>
                     <button>
                         <i className="fa-solid fa-trash" style={{color: "#ff0000",}}/>
                     </button>
                </div>
            ))
        }
    </div>
    :
    <h5>no categoris</h5>
   }
</div>
</>  )
}

export default Categorylist