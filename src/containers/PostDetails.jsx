import React from "react";

// Components
import Navbar from '../components/Navbar';

const PostDetails = () => {

  const [local, setLocal] = React.useState(null);

  React.useEffect(() => {
    const getLocalStorage = () => {
      setLocal(JSON.parse(localStorage.getItem("post")));
    };
    getLocalStorage();
  }, []);

  return (
    <div>
        <Navbar/>
        <div className="container">
      <h1>Details</h1>
      {local ? (
        <div className="card  mb-2">
          <div className="card-body">
            <h3 className="card-title"> {local.title} </h3>
            <p className="card-text"> {local.body} </p>
          </div>
        </div>
      ) : null}
    </div>
    </div>
  );
};

export default PostDetails;
