import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then((response) => {
            setLoading(false)
            setError('')
            setPost(response.data)
        })
        .catch((error) => {
            setLoading(false)
            setPost({})
            setError('Something went wrong!')
        })
    },[])
  return (
    <div>DataFetchingOne
        <h2>{loading ? 'loading' : post.title}
            {error ? error : ""}
        </h2>
    </div>
  )
}

export default DataFetchingOne
