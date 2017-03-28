import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';


class Buttons extends React.Component {
  constructor() {
    super();
    this.confirmYes = this.confirmYes.bind(this);
    // this.confirmNo = this.confirmNo.bind(this);
    this.state = {
      CurrentUser: {}
    }
  }
  confirmYes() {
      this.props.roster.map((match) => {
      if(match.id === Number(this.props.props.params.users)) {
        let data = {teacher:true};
          axios.put(`https://kipp-madness-api.herokuapp.com/users/${match.id}`, data).
          then(response =>
            console.log(response)
          );
      }
    });
  }

    render() {

        return (
            <div>
              <h1>Welcome to College Madness</h1>
              <h2 className="is-centered">Please Login</h2>
              <div className="login__container">
                <button onClick={this.props.addClass} className="kippBtn">Student Login</button>
                <Link to="teacher" onClick={this.confirmYes} className="kippBtn">Teacher Login</Link>
              </div>

            </div>
        );
    }
}

export default Buttons;
