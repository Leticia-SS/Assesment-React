import { useState, useEffect } from "react"

const FetchData = () => {
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchUsers = async () => {
        setLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if(response.ok) {
                const users = await response.json()
                setUsers(users)
            } else {
                setError('Erro ao buscar dados')
            }
        } catch (error) {
            setError('Erro no fetch', error)
        }
    }

    const fetchComments = async () => {
        setLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=${postId}')
            if(response.ok) {
                const comments = await response.json()
                setComments(comments)
            } else {
                setError('Erro ao buscar dados')
            }
        } catch (error) {
            setError('Erro no fetch', error)
        }
    }

    const fetchPosts = async () => {
        setLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/?userId=${userId}')
            if(response.ok) {
                const posts = await response.json()
                setPosts(posts)
            } else {
                setError('Erro ao buscar dados')
            }
        } catch (error) {
            setError('Erro no fetch', error)
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return {
        users,
        comments,
        posts,
        loading,
        error,
    }
}

export default FetchData()