import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1);
    const [idButtonClick, setIdButtonClick] = useState(1);

    const onSubmit = () => {
        setIdButtonClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButtonClick}`)
        .then((res) => {
            console.log(res.data)
            setPosts(res.data)
        }).catch((err) =>{
            console.log(err)
        })
    },[idButtonClick])
  return (
    <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={onSubmit}>Fetch Data</button>
        <h2>{posts.title}</h2>
    </div>
  )
}

export default DataFetching