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
        
        <div className="homes">
          <div className="titles">
          <h2>Potluck Planner!</h2>
            <p>
              <span>Organizing a Potluck? </span>We make it easy to include a
              handy Potluck List for your party guests when you send online
              invitations! 
            </p>
            <div className="homebuttons">
            <div
              className="button_slide slide_right"
              onClick={() => history.push("/signup")}
            >
              Sign Up!
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
        <div className="potluckSome">
<div className="text">
<p>If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets you get why this app is important. In the world of social gatherings and potlucks the "Potluck Planner" is king. This is your place for all things pot luck.</p>
</div>
        </div>
        <br/>
        <div className="heroImg">

        </div>
       
        <div className="boxes">
        
          <div className="left">
          <p><span>Potlucks are about sharing.</span><br/>Potlucks are an important part of many communities, as a way of bringing people together and eating. 
          <br/> <button className="button_slide slide_right"
              onClick={() => history.push("/signup")}>Sign Up</button></p>
          </div>
          <div className="right">
           <div className="imgcont">
           <img className="item-list-image" src="https://images.unsplash.com/photo-1581954548218-415cd6ee5f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt={'me'} />
           </div>
            </div>
        </div>

        <div className="boxes">
       
        <div className="right">
         <div className="imgcont">
         <img className="item-list-image" src="https://images.unsplash.com/photo-1529832588601-c01e066263a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt={'me'} />

         </div>
          </div>
           
        <div className="left">
        <p><span>Learn diffrent Culture</span><br/>A potluck is a great way to learn about other people Culture. <br/><button className="button_slide slide_right"
              onClick={() => history.push("/signup")}>Sign Up</button></p>
        
        </div>
      </div>
        

          
     <br/>

      <Footer />
    </>
  );
};

export default Home;
