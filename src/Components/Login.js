import React,{useState} from "react";
import { Link,useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "../style/Login.css";
import { useStateValue } from "./StateProvider";

function Login() {
    const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
      e.preventDefault();

      auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push('/')
                //it sucessfully created a new user with email and password
            
            })
            .catch(
                error => alert(error.message)
            )
  }

  const register = e => {
      e.preventDefault();

      auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
          // it successfully created a new user with email and password
          console.log(auth);
      })
      .catch(error => alert(error.message))

  }

 

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Amazon-logo.jpg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick= {signIn} className="login__signInButton">Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's twin CLONE Conditions of Use and
          Privacy Notice.
        </p>
        <button onClick= {register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
