import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(res => {
                setPosts(res.data.data);
            })
            .catch(error => {
                console.error('Errore nel recupero dei post:', error);
            });
    }, []);

    const addNewPost = (newPost) => {
        setPosts(prevPosts => [...prevPosts, newPost]);
    };

    const deletePost = (postId) => {
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    };

    return (
        <PostContext.Provider value={{ posts, addNewPost, deletePost }}>
            {children}
        </PostContext.Provider>
    );
};
