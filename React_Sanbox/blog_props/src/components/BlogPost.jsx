import React from 'react';

const BlogPost = ({ title, subTitle, author, date }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      {subTitle && <h3>{subTitle}</h3>}
      <p>By {author} on {date}</p>
    </div>
  );
};

export default BlogPost;
