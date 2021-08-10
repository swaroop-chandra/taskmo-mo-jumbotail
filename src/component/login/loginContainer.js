import Login from "./login";
import "./login.css";
export default function LoginContainer({setLoggedIn,setAdmin}) {
  return <div ><Login setLoggedIn={setLoggedIn} setAdmin={setAdmin} /></div>
}
