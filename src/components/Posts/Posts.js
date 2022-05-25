import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setposts(data))
    }, [])

    return (
        <div>
            <h1>This is Post in react: {posts.length}</h1>

            {
                posts.map(post => <Link
                    key={post.id}
                    to={`/posts/${post.id}`}>
                    {post.id}
                </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;