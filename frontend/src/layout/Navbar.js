import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{fontFamily:"sans-serif",height: "8vh",
    fontSize: "40px",}}>
                        Book Management
                    </a>
                    <Link className="btn btn-outline-light" to="/addbook" style={{fontFamily:"sans-serif",fontSize: "20px"}}>Add Book</Link>
                </div>
            </nav>
        </div>
    )
}