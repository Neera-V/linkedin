import React, { useState } from "react";
import "./Loginbody.css";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import img from "./icons/dxf91zhqd2z6b0bwg85ktm5s4.svg";
import { login /*logout*/ } from "./features/userSlice";

function Loginbody() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const logoutofApp = () => {
  //   dispatch(logout());
  //   auth.signOut();
  // };

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="mainbody">
      <div className="body">
        <div className="top_section">
          <div className="section1">
            <div className="heading_top">
              Welcome to your professional community
            </div>
            <div className="login_div">
              <form className="login">
                <div className="login1">
                  <div className="login_details">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input_input"
                      placeholder="Email or phone number"
                      type="text"
                    />
                  </div>
                  <div className="login_details">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input_input"
                      type="password"
                      placeholder="Password"
                    />
                    <button className="show">Show</button>
                  </div>
                  <a className="forgot_password" href="">
                    Forgot password?
                  </a>
                  <button className="signin" type="submit" onClick={loginToApp}>
                    Sign in
                  </button>
                </div>
              </form>

              {/* <div className="login_google">
                <div className="singin_divider">
                  <span className="signin_span">or</span>
                </div>
              </div> */}
            </div>
          </div>
          <img
            src={img}
            alt="Welcome to your professional community"
            className="image"
          />
        </div>
      </div>
    </div>
  );
}

export default Loginbody;
