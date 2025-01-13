import "./App.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { userContext } from "../Userprovider"; // Import userContext

function App() {
  const { user } = useContext(userContext); // Access user details from context

  return (
    <div className="grp1">
      {/* User Details in the Top-Right Corner */}
      <div style={{ position: "absolute", top: "10px", right: "10px", textAlign: "right" }}>
        {user ? ( 
          <div>
            {console.log(user)}
            <p>
              Welcome, <strong>{user.username}</strong>!
              {console.log(user.name)}
            </p>
            <p>UserID: {user.userid}</p>
          </div>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>

      <div className="grp2">
        <Sidebar />
        <Footer />
      </div>
      {/* Render Child Routes */}
      <Outlet />
    </div>
  );
}

export default App;
