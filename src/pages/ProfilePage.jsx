import { useState, useEffect } from 'react';

const ProfilePage = ({authToken}) => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    const fetchPosts = async() => {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT/posts', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            });

            const result = await response.json();
            console.log(result.data.posts[0].messages);
            if(result.success) {
                setPosts(result.data.posts);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    
    const handleViewPost = (postId) => {
        const selected = posts.find(post => post._id === postId);
        setSelectedPost(selected);
    };

    return (
        <>
            {selectedPost && (
                <div>
                    <h2>Selected Post Details:</h2>
                    <p>Author: {selectedPost.author.username}</p>
                    <p>Message: {selectedPost.message}</p>
                    <p>Description: {selectedPost.description}</p>
                    <button onClick={() => setSelectedPost(null)}>Close</button>
                </div>
            )}
          
            <h3>Messages to Me:</h3>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <h2>Author: {post.author.username}</h2>
                        <h4>Message: {post.messages}</h4>
                        <button onClick={() => handleViewPost(post._id)}>View My Post</button>
                    </li>
                ))}
            </ul>



        </>

        
    ); 
};

export default ProfilePage;