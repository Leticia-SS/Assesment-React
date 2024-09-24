import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '/logo.png'
import FetchData from './FetchData';
import Post from './components/Post';
import Comment from './components/Comment'

const CommentsPage = () => {
  const { postId } = useParams();
  const { posts, comments, loading, error } = FetchData();
  const navigate = useNavigate()

  if (loading) return <div><img src={Logo} className="logo react" alt="React logo" /></div>
    if (error) return <div>Erro: {error.message}</div>

  const post = posts.find((post) => post.id === parseInt(postId));
  const postComments = comments.filter((comment) => comment.postId === parseInt(postId));

  return (
    <div className='main-card'>
        <button onClick={() => navigate(-1)}>Back</button>
        {post && <Post post={post} />}
        <h2>Comments</h2>
        {postComments.map((comment) => (
            <div key={comment.id}>
                <Comment comment={comment} />
            </div>
        ))}
    </div>
);
};

export default CommentsPage;