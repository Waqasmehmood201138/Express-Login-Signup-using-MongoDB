import { React, useState } from 'react'
import axios from 'axios'

export default function Signup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")

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
    }

    // Handle the data from frontend to backend
    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const res = await axios.post('http://localhost:8081/user', {

                name,
                email,
                age,
                password,
                address
            })

            alert(`${res} Signed Up .....`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">


                        <form action="" className='col-5' onSubmit={handleSubmit}>
                            <h4 className='text-primary '>Signup Page</h4>

                            <input value={name} onChange={e => handleChange(e)} type="text" placeholder='Enter Full Name' name='fullName' className='form-control mb-2' />
                            <input value={email} onChange={e => handleChange(e)} type="email" placeholder='Enter Email' name='email' className='form-control mb-2' />
                            <input value={age} onChange={e => handleChange(e)} type="text" placeholder='Enter Age' name='age' className='form-control mb-2' />
                            <input value={password} onChange={e => handleChange(e)} type="password" placeholder='Enter Password' name='password' className='form-control mb-2' />
                            <input value={address} onChange={e => handleChange(e)} type="text" placeholder='Enter Address' name='address' className='form-control mb-2' />
                            <input type="submit" value="Sign me up" className='btn btn-secondary mb-2 w-100' />

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
