import React from 'react';
import { Link } from 'react-router'
import Roster from './Roster.js';
import Inbox from './Inbox.js';
import Homeroom from './Homeroom.js';

class TeacherLogin extends React.Component {


    render() {

        return (
          <div className="teacher__container">
            <nav className="teacher__nav">
              <ul>
                <li className="teacher__nav__item">Inbox</li>
                <li className="teacher__nav__item">Homeroom</li>
                <li className="teacher__nav__item"><Link to="/bracket">My Bracket</Link></li>
              </ul>
            </nav>
            <h1 className="welcome__message">Welcome Teacher!</h1>
            <div className="teacher__things__container">
              <Roster/>
              <Inbox/>
              <Homeroom/>
            </div>
          </div>
        );
    }
}

export default TeacherLogin;
