import React, { useState } from "react";
import { useHistory } from "react-router";
import "./login.css";
import { MyGoogleLogin } from "../GoogleLogin";
function Login({ setLoggedIn, setAdmin }) {
  // const history=useHistory();
  const [loginError, setLoginError] = useState("");
  const loginFunc = (r) => {
    // console.log(r);
    localStorage.setItem("jma", r.accessToken);
    localStorage.setItem("jmae", r.profileObj.email);
    // console.log(r);
    setLoggedIn(true);
    // history.push("/dashboard");
  };
  const logoutFunc = () => {
    setLoggedIn(false);
    localStorage.removeItem("jma");
    localStorage.removeItem("jmae");
  };
  return (
    // <div
    //   className="login"
    //   style={{
    //     height: "600px",
    //     background: `url('${process.env.PUBLIC_URL}/images/bgImage.png')`,
    //   }}
    // >
    //   <p className="login_p1">Welcome Back !</p>

    //   <div className="login_card">
    //     <div className="login_button">
    //       <img
    //         src={window.location.origin + "/images/gLogo.svg"}
    //         alt="profile"
    //         className="login_img"
    //       />
    //       <p className="login_p">login with google</p>
    //     </div>
    //   </div>
    // </div>
    <div className="login-container">
      <div className="img-container">
        <img
          src={window.location.origin + "/images/jumbo.jpeg"}
          alt="profile"
          className="bg_img"
        />
      </div>

      <div className="btn-block-container">
        {/* <img
          src={window.location.origin + "/images/jiom-taskm-logo.png"}
          alt="logo"
          // style={{ height: "100px" }}
        /> */}
        <div className="loginText">MERCHANT ONBOARDING</div>
        <MyGoogleLogin
          loginFunc={loginFunc}
          logoutFunc={logoutFunc}
          setLoginError={setLoginError}
          setAdmin={setAdmin}
        />
        
        <div style={{ color: "red",marginTop:"10px" }}>{loginError}</div>
      </div>
    </div>
  );
}

export default Login;
