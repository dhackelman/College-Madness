import React from 'react';
import axios from 'axios';
import Roster from './Roster.js';
import Inbox from './Inbox.js';

class TeacherLogin extends React.Component {
  constructor() {
    super();
    this.getUserData = this.getUserData.bind(this);
  }
  getUserData() {
   axios.get("https://kipp-madness-api.herokuapp.com/users.json")
   .then(function(data) {
     const users = data.data.users;
     return users;
    });
   }

    render() {
        return (
          <div className="teacher__container">
            <nav className="teacher__nav">
              <ul>
                <li className="teacher__nav__item">Inbox</li>
                <li className="teacher__nav__item">Leaderboard</li>
                <li className="teacher__nav__item">Homeroom</li>
              </ul>
            </nav>
            <h1 className="welcome__message">Welcome Teacher!</h1>
            <div className="teacher__things__container">
              <Roster getUserData={this.getUserData}/>
              <Inbox/>
            </div>
          </div>
        );
    }
}

export default TeacherLogin;
