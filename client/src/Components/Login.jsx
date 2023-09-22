import axios from 'axios'
import {React , useState} from 'react'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = (e) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }
        else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleLogin = async (e) => {

        e.preventDefault()

        try {

            const res = await axios.post('http://localhost:8081/user/login' , {
                email,
                password

               
            })

            alert(res.data)
            // console.log(email)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <form action="" className='col-5' onSubmit={handleLogin}>
                            <h4 className='text-primary '>Sign In Page</h4>

                            <input value={email} onChange={e => handleChange(e)} type="email" placeholder='Enter Email' name='email' className='form-control mb-2' />
                            <input value={password} onChange={e => handleChange(e)} type="password" placeholder='Enter Password' name='password' className='form-control mb-2' />
                            <input type="submit" value="Sign In" className='btn btn-secondary mb-2 w-100' />

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
