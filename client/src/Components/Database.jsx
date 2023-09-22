import axios from "axios"
import { React, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function Database() {

    const [user, setUser] = useState([])
    const [deleteUser, setdeleteUser] = useState([])
    const [isDeleteActive , setIsDeleteActive] = useState(false)

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
            <div className="container mt-4">
                <div className="row">
                    <h3 className="text-center text-success">Registered Users </h3>
                    {isDeleteActive ? 
(                    <div class="alert alert-warning" role="alert">
                        {deleteUser}
                    </div>) : " "}
                    <hr />
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
                                    <tr>
                                        <td colSpan={5}>Users Not Found</td>
                                    </tr>
                                ) : (user.map((element) => {

                                    return (
                                        <tr>
                                            <th >{element._id}</th>
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
        </>
    )
}
