import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function FormProduct() {
    const [data, setData] = useState([])
    const [form, setForm] = useState({})
    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        await axios.get(process.env.REACT_APP_API + '/product')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // don't refresh page
        if (form.name && form.detail && form.price) {
            await axios.post(process.env.REACT_APP_API + '/product', form)
                .then((res) => {
                    console.log(res.data)
                    loadData() // reload data after submit
                })
                .catch((err) => console.log(err))
        } else {
            alert('Please fill all fields')
        }
    }

    const handleDelete = async (id) => {
        await axios.delete(process.env.REACT_APP_API + `/product/${id}`) //  send id to server for delete
            .then((res) => {
                console.log(res.data)
                loadData() // reload data after delete
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    name="name"
                    placeholder="name"
                    type="text"
                    onChange={e => handleChange(e)} />
                <input
                    name="detail"
                    placeholder="detail"
                    type="text"
                    onChange={e => handleChange(e)} />
                <input
                    name="price"
                    placeholder="price"
                    type="text"
                    onChange={e => handleChange(e)} />
                <button>Submit</button>
            </form>

            <table className="table table-bordered">
                <thead className='bg-primary text-white'>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">name</th>
                        <th scope="col">detail</th>
                        <th scope="col" className=''>price</th>
                        <th>action</th>
                        <th>edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ? data.map((item, index) => (
                            <tr key={index}>
                                <td scope='row'>{index + 1}</td>
                                <td scope='row'>{item.name}</td>
                                <td scope='row'>{item.detail}</td>
                                <td scope='row'>{item.price}</td>
                                <td scope='row'>
                                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                                </td>
                                <td scope='row'>
                                    <Link to={`/edit/${item._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        )) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FormProduct
