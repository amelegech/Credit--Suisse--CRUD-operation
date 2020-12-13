import React from "react";
import axios from "axios";

class UserRegistration extends React.Component {
  state = {
    name: "",
    mobile: "",
    email: "",
    password: "",
    profilePcture: "",
  };
  userName = (event) => {
    event.preventDefault();
    this.setState({ ...this.state, name: event.target.value });
  };
  userMobile = (event) => {
    event.preventDefault();
    this.setState({ ...this.state, mobile: event.target.value });
  };
  userEmail = (event) => {
    this.setState({ ...this.state, email: event.target.value });
  };
  userPassword = (event) => {
    event.preventDefault();
    this.setState({ ...this.state, password: event.target.value });
  };
  userProfilePicture = (event) => {
    event.preventDefault();
    const userImg = event.target.files[0]
    console.log('user Img', userImg);
    this.setState({ ...this.state, profilePcture: userImg });
  };
  submitUserInfo = () => {
    //if (this.state.name.length < 10 && this.state.mobile === 10) {
      // const body_userInfo = {
      //   name: this.state.name,
      //   mobile: this.state.mobile,
      //   email: this.state.email,
      //   password: this.state.password,
      //   profilePcture: this.state.profilePcture,
      // };
      const formData = new FormData();
      formData.append('name',this.state.name);
      formData.append('mobile',this.state.mobile)
      formData.append('email',this.state.email)
      formData.append('password',this.state.password)
      formData.append('profilePcture',this.state.profilePcture)
      

      axios
        .post("http", formData)
        .then((resp) => {
          console.log("User Information sent to Database", resp);
        })
        .catch((error) => {
          console.log(error.message);
        });
    //} else {
      //return "Invalid user information";
    //}
  };

  render() {
    return (
      <div>
        <h3> User Registrarion page</h3>
        <div>
          <form>
            <div>
              <span>Name: </span>
              <input
                type="text"
                placeholder="Enter User Name"
                value={this.state.name}
                onChange={(event) => {
                  this.userName(event);
                }}
              />
            </div>
            <div>
              <span> Phone: +1</span>
              <input
                type="number"
                placeholder="Enter Phone Number"
                value={this.state.mobile}
                onChange={(event) => {
                  this.userMobile(event);
                }}
              />
            </div>
            <div>
              <span>Email: </span>
              <input
                type="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={(event) => {
                  this.userEmail(event);
                }}
              />
            </div>
            <div>
              <span>Password: </span>
              <input
                type="password"
                placeholder="Enter your Password"
                value={this.state.password}
                onChange={(event) => {
                  this.userPassword(event);
                }}
              />
            </div>
            <div>
              <span>Picture: </span>
              <input
                type="file"
                placeholder="Your Pictur"
                //value={this.state.profilePcture}
                onChange={ 
                  this.userProfilePicture}
              />
            </div>
         <button onClick={this.submitUserInfo}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserRegistration;
