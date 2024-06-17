import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditStudent() {
    let navigate = useNavigate()

    const [student, setStudent] = useState({
        name:"", 
        gpa: 0.0, 
        email: ""
    })

    const {id} = useParams()
    const{name, gpa, email}=student

    const onInputChange = (e)=>{
        setStudent({ ...student, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        loadUser(); 
    }, []); 

    const onSubmit= async (e) => {
        e.preventDefault(); 
        await axios.put(`http://localhost:8080/user/${id}`, student)
        navigate("/")
    }

    const loadUser = async ()=> {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setStudent(result.data)
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit Student in System</h2>

                    <form onSubmit={(e) => onSubmit(e)}>  
                        <div className='mb-4'>
                            <div class="mb-3">
                                <label htmlFor='Name' className='form-label'>
                                    Name
                                </label>
                                <input 
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter the student's name"
                                    name="name"
                                    value={name}
                                    onChange = {(e) => onInputChange(e)}
                                />
                            </div>

                            <div class="mb-3">
                                <label htmlFor='Name' className='form-label'>
                                    Semester GPA
                                </label>
                                <input 
                                    type={"number"}
                                    className="form-control"
                                    placeholder="4.0"
                                    name="gpa"
                                    value={gpa}
                                    onChange = {(e) => onInputChange(e)}
                                />
                            </div>

                            <div class="mb-3">
                                <label htmlFor='Email' className='form-label'>
                                    Email
                                </label>
                                <input 
                                    type={"email"}
                                    className="form-control"
                                    placeholder="name@example.com"
                                    name="email"
                                    value={email}
                                    onChange = {(e) => onInputChange(e)}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>

                            <Link type="submit" className="btn btn-outline-danger mx-2" to="/">
                                Cancel
                            </Link>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}