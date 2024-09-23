import { useState, useEffect } from "react"

const FetchData = () => {
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        const fetchPosts = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        const fetchComments = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await response.json();
            setComments(data);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUsers();
        fetchPosts();
        fetchComments();
      }, []);

    return {
        users,
        posts,
        comments,
        loading,
        error,
    }
}

export default FetchData