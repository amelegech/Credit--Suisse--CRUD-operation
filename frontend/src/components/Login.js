import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
 
const Login =()=>{
const histor = useHistory();
const [email, setEmail]= React.useState("");
const [password, setPassword]= React.useState("");
 
const emailValue=(event)=>{
  event.preventDefault();
  const enteredEmail = event.target.value;
  setEmail(enteredEmail);

}
const passwordValue=(event)=>{
  event.preventDefault();
  const enteredPassword = event.target.value;
  setPassword(enteredPassword);

}

const  userLogin = async ()=>{
try {

  const result = await axios.post('http://localhost:8080/bank/login',{email,password})
  console.log("user data to DB", result);
  histor.push("/UsersList")
} catch (error) {
  console.log(error.message);
}
   
}
  return(
    <div>
        <h2>Hi, welcome To User Login page</h2>
        <form>
          <div>
            <span>User Name:</span>
            <input
              type="text"
              placeholder=" Enter Your user"
              onChange={emailValue}
            />
          </div>
          <div>
            <span>Password</span>
            <input
              type="text"
              placeholder=" Enter Your user"
              onChange={passwordValue}
            />
          </div>
          <button onClick={userLogin}>login</button>
        </form>
      </div>
  )
}

/*class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  emailValue = (event) => {
    this.setState({ ...this.state, email: event.target.value });
  };
  passwordValue = (event) => {
    this.setState({ ...this.state, password: event.target.value });
  };
  userLogin = () => {
    const body = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("Http", body)
      .then((res) => {
        console.log("user info send to DB", res);

      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render() {
    return (
      <div>
        <h2>Hi, welcome To User Login page</h2>
        <form>
          <div>
            <span>User Name:</span>
            <input
              type="text"
              placeholder=" Enter Your user"
              value={this.state.email}
              onChange={(event) => {
                this.emailValue(event);
              }}
            />
          </div>
          <div>
            <span>Password</span>
            <input
              type="text"
              placeholder=" Enter Your user"
              value={this.state.password}
              onChange={(event) => {
                this.passwordValue(event);
              }}
            />
          </div>
          <button onClick={this.userLogin}>login</button>
        </form>
      </div>
    );
  }
}*/

export default Login;
