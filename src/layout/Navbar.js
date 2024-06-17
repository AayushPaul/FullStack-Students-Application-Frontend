import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Dean's List Application</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h2 className='fs-5 text-secondary-emphasis'> This is an application that helps college counselors 
                    add students to the system with their semester GPAs and college emails to help college faculty determine who is on the Dean's List each semester. 
                    Any college can use this application. Students who have at least a 3.5 GPA make the Dean's List! 
                </h2>
                <Link className="btn btn-outline-light" to="/addstudent">Add Student</Link>
            </div>
        </nav>
    </div>
  )
}
