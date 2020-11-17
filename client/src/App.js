import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { Landing } from "./components/Landing";
import { NavBar } from "./components/NavBar";
import { loadUser } from "./store/actions/authActions";

const App = () => {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [])

  return (
    <div className="container">
      <NavBar />
      {isAuthenticated ? <Content /> : <Landing />}
      <Footer />
    </div>
  );
};

export default App;
