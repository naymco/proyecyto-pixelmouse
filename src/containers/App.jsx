import React from 'react';
import axios from 'axios';

import '../index.css';

// Components
import Navbar from '../components/Navbar';

function App(props) {
  const [ posts, setPosts ] = React.useState([]);

  React.useEffect(() =>{

    const getAllPost = async ()=>{
      const res = await  axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data)
      
    }
    getAllPost();
   }, []);

   const getComments = ( postid )=>{
     
    console.log(postid);
    localStorage.setItem('post', JSON.stringify(postid));
    props.history.push(`/post/${postid.id}`);
    
   }

  return (
   <div>
      <Navbar />
      <div className="container mt-3">
      <h1>All Posts</h1>
    {
      posts.map( post => {
       return (
          <div key={post.id} className="card  mb-2">
            <div className="card-body">
                <h3 className="card-title"> {post.title} </h3>
                <p className="card-text"> { post.body} </p>
                <button type="button" onClick={()=> getComments(post)} className="btn btn-primary">Details</button>
                
            </div>
          </div>
        )
      } )
    }

    </div>
   </div>
  );
}

export default App;

