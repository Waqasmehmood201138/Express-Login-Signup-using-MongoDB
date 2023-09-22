import axios from 'axios'
import { React, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function EditUser() {

  const navigate = useNavigate()
  const location = useLocation()

  const [id, setId] = useState(location.state._id)
  const [name, setName] = useState(location.state.name)
  const [email, setEmail] = useState(location.state.email)
  const [age, setAge] = useState(location.state.age)
  const [password, setPassword] = useState(location.state.password)
  const [address, setAddress] = useState(location.state.address)


  const handleChange = (e) => {

    // console.log(e)
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

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.put('http://localhost:8081/user/' + id, {

        name,
        email,
        age,
        password,
        address
      })

      if (response.data) {
        navigate('/database')
        alert(response.data)
      }
    } catch (error) {

      console.log(error)
    }

  }



  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">

            <form action="" className='col-5' onSubmit={handleSubmit}>
              <h4 className='text-primary '>Update User Detail</h4>

              <input value={name} onChange={e => handleChange(e)} type="text" placeholder='Enter Full Name' name='fullName' className='form-control mb-2' />
              <input value={email} onChange={e => handleChange(e)} type="email" placeholder='Enter Email' name='email' className='form-control mb-2' />
              <input value={age} onChange={e => handleChange(e)} type="text" placeholder='Enter Age' name='age' className='form-control mb-2' />
              <input value={password} onChange={e => handleChange(e)} type="password" placeholder='Enter Password' name='password' className='form-control mb-2' />
              <input value={address} onChange={e => handleChange(e)} type="text" placeholder='Enter Address' name='address' className='form-control mb-2' />
              <input onChange={e => handleChange(e)} type="submit" value="Update User" className='btn btn-secondary mb-2 w-100' />

            </form>
          </div>
        </div>
      </div>

    </>
  )
}
