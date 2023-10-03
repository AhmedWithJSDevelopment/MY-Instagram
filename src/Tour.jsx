// import React, { useState } from 'react';

const Post = ({ id, media_url, caption, media_type
, removeTour,permalink }) => {
  // const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      {/* <img src={media_url} alt={caption} className='img' /> */}

<a href={permalink} target="_blank" rel="noopener noreferrer" />
        {media_type === 'VIDEO' ? (
              <video src={media_url} controls className="img"></video>
                ):
                 
                         (
              <img src={media_url} alt={caption || ''} className="img" />
                )
              
              
      }
      <a />
      <span className='tour-price'>{media_type
}</span>
      <div className='tour-info'>
        <h5>{caption}</h5>

        {/* <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='info-btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p> */}
        <button
          className='delete-btn btn-block btn'
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Post;
