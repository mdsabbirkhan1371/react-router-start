import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [freinds, setfriends] = useState([])
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setfriends(data))
    }, [])


    return (
        <div>
            <h3>This is friends section</h3>
            <p>Heloo friends Come to me: {freinds.length} </p>
            {
                freinds.map(friend => <Friend
                    friend={friend}
                    key={friend.id}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;