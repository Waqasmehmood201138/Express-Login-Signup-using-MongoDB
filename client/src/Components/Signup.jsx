import { React, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

export default function Signup() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [file, setFile] = useState()

    // handle the input changes
    const handleChange = (e) => {
        if (e.target.name === 'fullName') {
            setName(e.target.value)
        }
        else if (e.target.name === 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name === 'age') {
            setAge(e.target.value)
        }
        else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
        else if (e.target.name === 'address') {
            setAddress(e.target.value)
        }
        else if (e.target.name === 'file') {
            setFile(e.target.files[0])
            console.log(e)
        }
    }

    // Handle the data from frontend to backend
    const handleSubmit = async (e) => {

        e.preventDefault()
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('age', age);
        formData.append('password', password);
        formData.append('address', address);
        formData.append('file', file);

        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };

        try {

            const res = await axios.post('http://localhost:8081/user',  formData, config )
            // {
            //     name,
            //     email,
            //     age,
            //     password,
            //     address,
            //     file,
            // })

            console.log(file)

            if (res.data) {
                navigate('/database')
                alert(`${res.data} Signed Up .....`)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">



                        <form className="form" onSubmit={handleSubmit}>
                            <p className="title">Register </p>
                            <p className="message">Signup now and get full access to our app. </p>
                            <div className="flex">
                                <label>
                                    <input value={name} onChange={e => handleChange(e)} required="" placeholder="" type="text" className="input" name='fullName' />
                                    <span>FullName</span>
                                </label>

                                <label>
                                    <input value={age} onChange={e => handleChange(e)} required="" placeholder="" type="text" className="input" name='age' />
                                    <span>Age</span>
                                </label>
                            </div>

                            <label>
                                <input value={email} onChange={e => handleChange(e)} required="" placeholder="" type="email" className="input" name='email' />
                                <span>Email</span>
                            </label>

                            <label>
                                <input value={password} onChange={e => handleChange(e)} required="" placeholder="" type="password" className="input" name='password' />
                                <span>Password</span>
                            </label>
                            <label>
                                <input value={address} onChange={e => handleChange(e)} required="" placeholder="" type="text" className="input" name='address' />
                                <span>Address</span>
                            </label>
                            <label>
                                <input onChange={e => handleChange(e)} required="" placeholder="" type="file" className=" form-control custom_input" name='file' />
                                {/* <span>Image</span> */}
                            </label>
                            <input type='submit' value="Sign me up" className="submit" />
                            <p className="signin">Already have an acount ? <Link to="/login">Signin</Link> </p>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}
