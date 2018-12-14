import React from "react";
import "../../app.css";

function Login(props) {
  return (
    <div className="container">
        <h1>Login</h1>

        <form className="needs-validation" noValidate>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                <div className="invalid-feedback">
                    Please provide a valid Email address.
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                <div className="invalid-feedback">
                    Please provide a valid password.
                </div>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
    );  
}

export default Login;