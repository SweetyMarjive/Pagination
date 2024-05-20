import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts =async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  },[]);
  console.log(posts);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">MY BLOG</h1>


    </div>
  )
}

export default App
