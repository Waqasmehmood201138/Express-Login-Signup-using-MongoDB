import axios from 'axios'
import { React, useState } from 'react'
import './Signup.css'
import { useLocation, useNavigate , Link } from 'react-router-dom'


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

            <form className="form" onSubmit={handleSubmit}>
              <p className="title">Update User</p>
              <p className="message">Update now and get full access to our app. </p>
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
              <input type='submit' value="Update" className="submit" />
              <p className="signin">Don't want to Update ? <Link to="/database">records</Link> </p>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}
