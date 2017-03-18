import React from 'react';
import axios from 'axios';

class Login extends React.Component {

  constructor() {
    super();
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  }
  componentDidMount() {

  }

  loginWithGoogle() {
    // console.log('Method: GET URL: /auth/google_oauth2');
      axios.get("https://kipp-madness-api.herokuapp.com/auth/google_oauth2'")
      .then(function(data) {
        console.log(data);
      });
    }

    render() {
        return (
            <div>
                <h1>Welcome to the Login Screen</h1>
                <div className="login__container">
                  <button className="login__button" onClick={this.loginWithGoogle}>
                    Login with Google
                  </button>
                </div>
            </div>
        );
    }
}

export default Login;
