import React, { useEffect, useState } from 'react';

const Home = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    return (
        <div>
           <h1>This is Home: {post.length}</h1> 
        </div>
    );
};

export default Home;
