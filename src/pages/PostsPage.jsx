import {useEffect, useState} from 'react';

const URL_API = 'https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT'

const PostsPage = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        const fetchAllPosts = async() => {
            try {
                const response = await fetch(`${URL_API}/posts`);
                const strangerData = await response.json();
                const allPostsArr = strangerData.data.posts;
                console.log(allPostsArr);
                setAllPosts(allPostsArr);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllPosts();        
    }, [])
    

    return (
        <>
            <h3>PostsPage Works!</h3>
            {allPosts.map((post) => {
                return (
                    <div key={post.author._id}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <h3><b>Price:</b>{post.price}</h3>
                        <h3 ><b>Seller:</b>{post.author.username}</h3>
                        <h4><b>Location: {post.location}</b></h4>
                        <button> See Details </button>
                    </div>
                )
            })}
            {/* Have Posts(Items Selling) here */}
        </>
    ) 

}

export default PostsPage;