import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios"
export default function Home() {

    const [orders,setorders] = useState([])
    
    const {id}=useParams

    useEffect(() => {
       loadorders();
    },[]);
    const loadorders =async()=>{
        const result =await axios.get("http://localhost:8000/")
        setorders(result.data)
    }
    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:8000/${id}`)
        loadorders()
    }
    return (
        <div className='container'style={{fontFamily:"sans-serif",fontSize: "20px"}}>
            <div className='py-4'>
                <table className="table border shadow" style={{fontSize: "20px"}}>
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((orders)=>( 
                            <tr>
                                <th scope="row">{orders.id}</th>
                                <td>{orders.name}</td>
                                <td>{orders.author_name}</td>
                                <td>{orders.email}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/viewbook/${orders.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mx-2" to={`/editbook/${orders.id}`}>Edit</Link>
                                    <button className="btn btn-danger mx-2"
                                    onClick={()=>deleteUser(orders.id)}>Delete</button>
                                </td>
                            </tr>
                            ))
                        }

                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}