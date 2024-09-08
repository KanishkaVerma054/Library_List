import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewOrder() {

    const [order,setorder] = useState({
      name:"",
      author_name:"",
      email:"",
    })

    const {id} = useParams();

    useEffect(()=>{
        loadOrders()
    },[id])//i


    const loadOrders= async()=>{
        
        const result = await axios.get(`http://localhost:8000/getbook/${id}`)
        setorder(result.data)
    }

  return (
    <div className="container" style={{fontFamily:"sans-serif",fontSize: "30px"}}>
        <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{background: "wheat"}}>
              <h2 className="text-center m-40" style={{fontSize: "40px"}}>Order Details</h2>
                <div className="card">
                    <div className="card-header">
                        Details of Book id: {order.id}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Book Name</b>: {order.name}
                            </li>
                            <li className="list-group-item">
                                <b>Author_name</b>: {order.author_name}
                            </li>
                            <li className="list-group-item">
                                <b>Email</b>: {order.email}
                            </li>
                        </ul>

                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"} style={{fontSize: "30px"}}>Back To Home</Link>
            </div>
        </div>
    </div>    

  )
}