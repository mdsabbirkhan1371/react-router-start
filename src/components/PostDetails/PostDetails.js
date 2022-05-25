import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { postId } = useParams();
    const [post, setpost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(r => r.json())
            .then(d => setpost(d))
    }, [postId])
    return (
        <div>
            <h3>This is post details:{postId} </h3>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;