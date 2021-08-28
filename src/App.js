import "./App.css";
import Ninja from "./component/MainContent2/Ninja";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import LoginContainer from "./component/login/loginContainer";
import { useState, useEffect } from "react";
import { checkEmail } from "./utils";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "./component/Header";
// import Counter from "./component/Counter";
// import GraphContainer from "./component/GraphContainer";
function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin,setAdmin]=useState(false);
  useEffect(() => {
    const key = localStorage.getItem("jma");
    const email_id=localStorage.getItem("jmae");
    if (key && email_id ) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  useEffect(()=>{
    const email_id=localStorage.getItem("jmae");
    if(email_id){
      fetch(checkEmail,{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          email_id
        })
      }).then(r=>r.json())
      .then((r=>{
        console.log("Checking Email Response",r,r.user.user_type==="admin");
        if(r.error){
          setLoggedIn(false);
          localStorage.removeItem("jmae");
        }else if(r.user.user_type==="admin"){
          setAdmin(true);          
        }else{
          setAdmin(false);
        }
      }));
    }
  },[]);
  return (
    <div>
      <Route exact path="/">
        {loggedIn ? (
          <Redirect to="/home" />
        ) : (
          <>
            <div className="App1">
              <LoginContainer setLoggedIn={setLoggedIn} setAdmin={setAdmin} />
            </div>
          </>
        )}
      </Route>
      {/* <Route path="/">
        <Redirect to="/login">
          {loggedIn ? (
            <></>
          ) : (
            <>
              <div className="App">
                <LoginContainer setLoggedIn={setLoggedIn} />
              </div>
            </>
          )}
        </Redirect>
      </Route> */}
      <Route path="/home">
        <div className="App">
          {loggedIn ? (
            <Ninja setLoggedIn={setLoggedIn} admin={admin} />
          ) : (
            <>
              {(() => {
                history.push("/");
              })()}
            </>
          )}
        </div>
      </Route>
      {/* {loggedIn ? <Ninja /> : <LoginContainer setLoggedIn={setLoggedIn} />} */}

      {/* <Header />
      <div className="myCol content">
        <div className="project-id" style={{width:"100%"}}>
            <div>Project Id: {1256}</div>
        </div>
        <Counter />
        <GraphContainer/>
      </div> */}
      {/* </div> */}
    </div>
  );
}

export default App;
