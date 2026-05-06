import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FormProduct() {
    const [data, setData] = useState([])
    const [form, setForm] = useState({})          
    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        await axios.get('http://localhost:5000/api/product')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    console.log(form)

    return (
        <div>
            <form>
                <input name="name" placeholder="name" type="text" onChange={e => handleChange(e)} />
                <input name="detail" placeholder="detail" type="text" onChange={e => handleChange(e)} />
                <input name="price" placeholder="price" type="text" onChange={e => handleChange(e)} />
                <button>Submit</button>
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">name</th>
                        <th scope="col">detail</th>
                        <th scope="col">price</th>
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
                            </tr>
                        )) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FormProduct
