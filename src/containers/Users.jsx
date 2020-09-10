import React from "react";

// Goole Maps
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// Components
import Navbar from "../components/Navbar";
import axios from "axios";

const Users = (props) => {
  const [users, setUsers] = React.useState([]);

  const style = {
    width: "30%",
    height: "10%",
   
  };

  React.useEffect(() => {
    const getAllUsers = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    };

    getAllUsers();
  }, []);
  console.log(users);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Users</h1>
        {users.map((user) => {
          console.log(user.address.geo.lat);
          return (
            <div key={user.id} className="displaying">
             <div>
             <h3> {user.name} </h3>
              <p> {user.username} </p>
              <p> {user.email} </p>
             </div>
              
                <Map
                  google={props.google}
                  style={style}
                  initialCenter={{
                    lat: user.address.geo.lat,
                    lng: user.address.geo.lng,
                  }}
                  zoom={14}
                />
              
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAEuDsJmU3-H0XgCTLsqUmRvmwVMcVmXZg",
})(Users);
