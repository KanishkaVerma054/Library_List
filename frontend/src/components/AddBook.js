import React, { useState } from 'react';
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

export default function AddUser() {

  let navigate = useNavigate()

    const [orders,setorders] = useState({
      id:"",
      name:"",
      author_name:"",
      email:"",
    })

    const{name,author_name,email} = orders

    const onInputChange=(e)=>{

        setorders({...orders,[e.target.name]:e.target.value})

    }

    const onSubmit= async(e)=>{
      e.preventDefault();
      await axios.post("http://localhost:8000/addbook",orders)
      navigate("/")
    }

  return (
    <div className="container"style={{fontFamily:"sans-serif",fontSize: "30px"}}>
        <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{fontSize: "40px", background:"wheat"}}>
              <h2 className="text-center m-40"style={{fontSize: "40px"}}>Enter The Book Details</h2>
              <form onSubmit={(e)=>onSubmit(e)}>
              <div className="mb-3" style={{fontFamily:"sans-serif"}}>
                <label htmlFor="Number" className="form-label">
                Book Name
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the name"
                name="name"
                value={name}
                onChange={(e)=>onInputChange(e)}
                style={{fontSize: "30px"}}
                />
                
              </div>
              <div className="mb-3" style={{fontFamily:"sans-serif"}}>
                <label htmlFor="address" className="form-label">
                Author_name
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Author Name"
                name="author_name"
                value={author_name}
                onChange={(e)=>onInputChange(e)}
                style={{fontSize: "30px"}}
                />
              </div>
              <div className="mb-3" style={{fontFamily:"sans-serif"}}>
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
              <button type="submit" class="btn btn-outline-primary" style={{fontFamily:"sans-serif",fontSize: "30px"}}>Submit</button>
              <Link class="btn btn-outline-danger mx-2" to="/" style={{fontFamily:"sans-serif",fontSize: "30px"}}>Cancel</Link>
              </form>
           </div>

        </div>
    </div>
  )
}