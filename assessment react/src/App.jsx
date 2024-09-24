import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './main';
import UserPage from './UserPage';
import PostPage from './PostPage';
import './App.css'

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/users/:userId" element={<UserPage />} />
              <Route path="/posts/:postId" element={<PostPage />} />
          </Routes>
      </Router>
  );
};

export default App
