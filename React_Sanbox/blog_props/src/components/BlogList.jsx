import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ blogPosts }) => {
  return (
    <div className="blog-list">
      {blogPosts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogList;
