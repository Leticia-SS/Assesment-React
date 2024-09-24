import { useState, useEffect } from "react"

const FetchData = () => {
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      const allFetchData = async () => {
          try {
              const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
                  fetch('https://jsonplaceholder.typicode.com/users'),
                  fetch('https://jsonplaceholder.typicode.com/posts'),
                  fetch('https://jsonplaceholder.typicode.com/comments'),
              ]);

              const usersData = await usersResponse.json();
              const postsData = await postsResponse.json();
              const commentsData = await commentsResponse.json();

              setUsers(usersData);
              setPosts(postsData);
              setComments(commentsData);
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false);
          }
      };

      allFetchData();
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