import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '/logo.png'
import FetchData from './FetchData';
import Post from './components/Post';
import Comment from './components/Comment'
import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CommentsPage = () => {
  const { postId } = useParams();
  const { posts, comments, loading, error } = FetchData();
  const navigate = useNavigate()
  const { selectedComments, setSelectedComments } = useState([])

  if (loading) return <div className='logo-container'><img src={Logo} className="logo react" alt="React logo" /></div>
  if (error) return <div>Erro: {error.message}</div>

  const post = posts.find((post) => post.id === parseInt(postId));
  const postComments = comments.filter((comment) => comment.postId === parseInt(postId));

  const deleteComment = (id) => {
    comments(comments.filter((comment) => comment.id !== id));
  }

  return (
    <div className='comments-card'>
        <button onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /></button>
        {post && <Post post={post} />}
        {postComments.map((comment) => (
            <div key={comment.id}>
                <Comment comment={comment} />
            </div>
        ))}
    </div>
);
};

export default CommentsPage;