import React, { useEffect, useState } from 'react';
import axios from "axios"
import {Link, useNavigate, useParams} from "react-router-dom"

export default function EditOrder() {

  
  let navigate = useNavigate()
  
  

    const [orders,setorders] = useState({
      name:"",
      author_name:"",
      email:""
    })
    const {id} = useParams();

    const{name,author_name,email} = orders

    const onInputChange=(e)=>{

      setorders({...orders,[e.target.name]:e.target.value})

    }

    useEffect(()=>{
        loadOrders()
    },[])

    const onSubmit= async(e)=>{
      e.preventDefault();

      await axios.put(`http://localhost:8000/editbook/${id}`,orders)
      navigate("/")
    }

    const loadOrders = async()=>{
        const result = await axios.get(`http://localhost:8000/getbook/`+id)
        setorders(result.data)
    }
  return (
    <div className="container" style={{fontFamily:"sans-serif",fontSize: "30px"}}>
        <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"style={{fontFamily:"sans-serif",background:"wheat"}}>
              <h2 className="text-center m-40" style={{fontFamily:"sans-serif",fontSize: "40px"}}>Edit The Book</h2>
              <form onSubmit={(e)=>onSubmit(e)}>
              
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Book Name
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Name"
                name="name"
                value={name}
                onChange={(e)=>onInputChange(e)}
                style={{fontSize: "30px"}}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Author Name
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the author_name"
                name="author_name"
                value={author_name}
                style={{fontSize: "30px"}}
                onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Email"
                name="email"
                value={email}
                onChange={(e)=>onInputChange(e)}
                style={{fontSize: "30px"}}
                />
              </div>
              <button type="submit" class="btn btn-outline-primary"style={{fontSize: "30px"}}>Submit</button>
              <Link class="btn btn-outline-danger mx-2" to="/"style={{fontSize: "30px"}}>Cancel</Link>
              </form>
           </div>

        </div>
    </div>
  )
}