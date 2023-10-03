import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import axios from 'axios';

// const url = 'https://course-api.com/react-tours-project';
const url = `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${
import.meta.env.VITE_API_KEY


}`;

function App() {
  const [loading, setLoading] = useState(true);
  // const [tours, setTours] = useState([]);
      const [posts, setPosts] = useState([]);

  // queryFas: async () => {
  //   const result = await axios.get(`${url}`);
  //   const Data = result.data.data
  //   console.log('====================================');
  //   //   // console.log(result.data.data);
  //   console.log(Data);
  //   console.log('====================================');
  //   // return result.data;
  //   const postsData = Data;
  //   setPosts(postsData);
  //   return Data;
  // };
  const removepost = (id) => {
    const newposts = posts.filter((post) => post.id !== id);
    setPosts(newposts);
  };

  const fetchPosts = async () => {
    // will use later
    setLoading(true);

    
    try {
      // const response = await fetch(url);
      // const tours = await response.json();
             const result = await axios.get(`${url}`);

      setLoading(false);
      setPosts(posts);
      //  const result = await axios.get(`${url}`);
    const Data = result.data.data
    console.log('====================================');
    //   // console.log(result.data.data);
    console.log(Data);
    console.log('====================================');
    // return result.data;
    const postsData = Data;
      setPosts(postsData);
            // setTours(postsData);

    return Data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (posts.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchPosts()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  
  return (
    <main>
      <Tours posts={posts} removeTour={removepost} />
    </main>
  );
}

export default App;
