import React from "react";
import { Button } from "react-bootstrap";
import "./home.css";
import { useHistory } from "react-router";
import img7 from "../img/img7.jpeg";
import img3 from "../img/img3.jpeg";
import Footer from "../footer/Footer";
const Home = () => {
  const history = useHistory();
  return (
    <>
      <div className="home">
        
        <div className="homepage">
          <div className="title">
          <h2>Potluck Planner!</h2>
            <p>
              <span>Organizing a Potluck? </span>We make it easy to include a
              handy Potluck List for your party guests when you send online
              invitations! Let your guests write in their contribution, or
              specify what you’d like each person to bring.
            </p>
          </div>
          <div className="homebuttons">
            <div
              className="button_slide slide_right"
              onClick={() => history.push("/signup")}
            >
              Register!
            </div>

            <div
              className="button_slide slide_right"
              onClick={() => history.push("/login")}
            >
              Login
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
