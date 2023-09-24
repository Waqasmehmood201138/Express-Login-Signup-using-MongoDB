import axios from "axios"
import { React, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Loader from "./Loader"
import './Loader.css'
// import './Database.css'


export default function Database() {

    const [user, setUser] = useState([])
    const [deleteUser, setdeleteUser] = useState([])
    const [isDeleteActive, setIsDeleteActive] = useState(false)

    const navigate = useNavigate()

    const fetchData = async () => {

        try {

            const { data } = await axios.get('http://localhost:8081/user')

            setUser(data)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        fetchData();

    }, [user])

    const handleDelete = async (id) => {

        try {


            const deleteUser = await axios.delete('http://localhost:8081/user/' + id)

            setIsDeleteActive(true);

            setTimeout(() => {

                setdeleteUser(`User ${deleteUser.data.name} deleted ... `)

            }, setIsDeleteActive);

            setTimeout(() => {
                setIsDeleteActive(false)
            }, 2000);

        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = (element) => {

        navigate('/edit', {
            state: element
        })
    }


    return (
        <>
            <section class="intro">
                <div class="gradient-custom-1 h-100">
                    <div class="mask d-flex align-items-center h-100"></div>
                    <div className="container mt-4">
                        <div className="row">
                            <h3 className="text-center text-success">Registered Users </h3>
                            <hr />
                            {isDeleteActive ?
                                (<div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    {deleteUser}
                                </div>) : " "}

                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <table className="table  table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.length === 0 ? (

                                            <td colSpan={5}><Loader /></td>

                                        ) : (user.map((element) => {

                                            return (
                                                <tr className="">
                                                    <th>{<img src={`http://localhost:8081/Images/` + element.file} alt="none" style={{ borderRadius: "50%", width: "50px", height: "50px" }} className="rounded-profile" />}</th>
                                                    <td>{element.name}</td>
                                                    <td>{element.email}</td>
                                                    <td>{element.address}</td>
                                                    <td>
                                                        <button className="btn btn-info" onClick={e => handleEdit(element)}>Edit</button>
                                                        <button className="btn btn-danger ms-1" onClick={e => handleDelete(element._id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        )
                                        )
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
