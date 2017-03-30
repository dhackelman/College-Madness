import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';


class ButtonConfirm extends React.Component {
  constructor() {
    super();
    this.confirmYes = this.confirmYes.bind(this);
    // this.confirmNo = this.confirmNo.bind(this);
    // this.state = {
    //   CurrentUser: {}
    // }
  }
  componentDidMount() {
    let user = this.props.props.params.users;
    this.props.updateCurrentUser(user);
    }


  confirmYes() {
      this.props.roster.map((match) => {
      if(match.id === Number(this.props.props.params.users)) {
        let data = {teacher:true};
          axios.put(`https://kipp-madness-api.herokuapp.com/users/${match.id}`, data)
          .then(response =>
            console.log(response)
          );
      }
      return 'yes';
    });
  }


    render() {
        return (
            <div className="login__container">
              <h1>Welcome to College Madness</h1>
              <div className="login__student-confirm">
                <button onClick={this.props.addClass} className="kippBtn">Student Login</button>
              </div>
              <div className="login__teach-container">
                <Link to="teacher" onClick={this.confirmYes} className="kippBtn">Teacher Login</Link>
                <h2>Auth Code</h2>
                <input type="password"></input>
              </div>
            </div>
        );
    }
}

export default ButtonConfirm;
