/*import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {


  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;*/
// App.js
import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <NavBar logout={logout} />
          <Outlet context={{ login }} />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default App;
