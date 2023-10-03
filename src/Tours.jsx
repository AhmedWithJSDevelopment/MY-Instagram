import React from 'react';
import Post from './Tour';
const Posts = ({ posts, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>My tours with my Instagram</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {posts.map((post) => {
          return <Post key={post.id} {...post} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Posts;
