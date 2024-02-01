import React from 'react';
import Header from './Header';
import BlogList from './BlogList';
import Footer from './Footer';
import blogPosts from '../data';

const App = () => {
  return (
    <div className="app">
      <Header />
      <BlogList blogPosts={blogPosts} />
      <Footer />
    </div>
  );
};

export default App;
