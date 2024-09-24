import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './main';
import PostsPage from './PostsPage';
import CommentsPage from './CommentsPage';
import './App.css'

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/users/:userId" element={<PostsPage />} />
              <Route path="/posts/:postId" element={<CommentsPage />} />
          </Routes>
      </Router>
  );
};

export default App
