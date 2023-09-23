import axios from 'axios'
import { React, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'

import './Signup.css'

export default function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const handleLogin = async (e) => {

        e.preventDefault()

        try {

            const res = await axios.post('http://localhost:8081/user/login', {
                email,
                password


            })

            if(res.data){
                navigate('/database')
                alert(res.data)
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
                        
                        <form className="form" onSubmit={handleLogin}>
                            <p className="title">Login </p>
                            <p className="message">Login now and get full access to our app. </p>
                            <label>
                                <input value={email} onChange={e => handleChange(e)} required="" placeholder="" type="email" className="input" name='email' />
                                <span>Email</span>
                            </label>

                            <label>
                                <input value={password} onChange={e => handleChange(e)} required="" placeholder="" type="password" className="input" name='password' />
                                <span>Password</span>
                            </label>

                            <input type='submit' value="Sign In" className="submit" />
                            <p className="signin">Not Register ? <Link to="/">Signup</Link> </p>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
