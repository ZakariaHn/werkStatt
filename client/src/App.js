import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { Landing } from "./components/landingPage/Landing";
import { NavBar } from "./components/NavBar";
import { loadUser } from "./store/actions/authActions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return isAuthenticated ? (
    <div className="container">
      <NavBar />
      <Content />
      <Footer />
    </div>
  ) : (
    <Landing />
  );
};

export default App;
