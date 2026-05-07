import { useEffect, useState } from 'react'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const FormeditProduct = () => {
    const params  = useParams() // get id from url
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        detail: '',
        price: ''
    })

    useEffect(()=> {
        readData(params.id) // read data from server by id
    }, [])

    const readData = async (id) => {
        await axios.get(process.env.REACT_APP_API + `/product/${id}`)
        .then((res) => {
            setData(res.data) // set data to state
        })
        .catch((err) => console.log(err))
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // don't refresh page
        console.log(data)
            await axios.put(process.env.REACT_APP_API + `/product/${params.id}`, data)
                .then((res) => {
                    console.log(res.data)
                    navigate('/') // navigate to home page after submit
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
                    value={data.name}
                    onChange={e => handleChange(e)} />
                <input
                    name="detail"
                    placeholder="detail"
                    type="text"
                    value={data.detail}
                    onChange={e => handleChange(e)} />
                <input
                    name="price"
                    placeholder="price"
                    type="text"
                    value={data.price}
                    onChange={e => handleChange(e)} />
                <button>Submit</button>
            </form>
    </div>
  )
}

export default FormeditProduct
