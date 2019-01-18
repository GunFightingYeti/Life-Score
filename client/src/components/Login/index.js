import React from "react";
import Jumbotron from '../Jumbotron';

function Login(props) {
  return (
      <div>
        <Jumbotron/>
        <div className="container">

            {/* Login */}
            <div className="row justify-content-center">

              <div className="col-12 results p-4">
              
                <div className="col-12">
                  <h1 className="mb-4">Login</h1>
                  <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"></div>
                </div>
              
                <h1 className="my-4">How do I play this game?</h1>
                <h4>1. Login</h4>
                <h4>2. Browse for an achievement that looks fun *</h4>
                <h4>3. Go do awesome things and get proof</h4>
                <h4>4. Upload the proof of your achievements and let your friends confirm your awesomeness!</h4>
                <h4>5. Feel like you've achieved more in life</h4>
                <p className="mt-3">* Some achievements are for entertainment only and should not be attempted</p>
              </div>

            </div>
      </div>
    </div>
    );  
}

export default Login;