import "./style.css";
import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { checkEmail } from "../../utils";
import glogo from './gLogo.svg';

export class MyGoogleLogin extends Component {
    
  responseGoogle = (r1) => {
    // this.props.loginFunc(r);
      if(r1.accessToken){
          
          const email_id=r1.profileObj.email;
          fetch(checkEmail,{
            method:"POST",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify({
              email_id
            })
          }).then(r=>r.json()).then((r)=>{
            console.log(r);
            if(r.error){
              console.log("error check login email true")
              this.props.logoutFunc();
              this.props.setLoginError("You don't have access, please contact admin")
            }else{
              this.props.loginFunc(r1);
              console.log("error check login email false");
              this.props.setLoginError("");
              if(r.user.user_type==="admin"){
                this.props.setAdmin(true);
              }
            }
          }).catch((e)=>{
            console.error("Error While login: ",e);
            this.props.logoutFunc();
          })
          
      }else{
        this.props.logoutFunc();
         
      }
    
  };

  render() {
    return (
      <>
        <GoogleLogin
          clientId="800470593510-95ns67g69fr5ne0cda6uks9ube3s543a.apps.googleusercontent.com"
          //below is localhost
          // clientId="800470593510-v4rijm08vf4iapke1q4jr1k1odg62dp8.apps.googleusercontent.com"
          buttonText="Sign In With Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={`single_host_origin`}
          render={renderProps => (
            <div className="login_button" onClick={renderProps.onClick} >
           <img
            src={glogo}
            alt="profile"
            className="login_img"
          />
          <p className="login_p">login with google</p>
        </div>
            // <button onClick={renderProps.onClick} style={{
            //   backgroundColor:"red"
            // }}>This is my custom Google button</button>
          )}
        />
      </>
    );
  }
}
