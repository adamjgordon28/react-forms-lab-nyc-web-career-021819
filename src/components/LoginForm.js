import React from "react";

class LoginForm extends React.Component {

  state = {
    username:"",
    password:""
  }


  handleInputChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
    })
  }

  loginConfirm = (e) => {
    e.preventDefault()
    if(this.state.username && this.state.password){
      this.props.handleLogin(e)
    }
  }

  render() {
    return (
      <form onSubmit={(e)=>this.loginConfirm(e)}>
        <div>
          <label>
            Username
            <input
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={event => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={event => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
