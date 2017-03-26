import React from 'react';
import { Link } from 'react-router'
import axios from 'axios'
import Roster from './Roster.js';
import Inbox from './Inbox.js';
import Homeroom from './Homeroom.js';

class TeacherLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      Students: [],
      Submissions:[]
    };
    this.getId = this.getId.bind(this);
  }

  componentDidMount() {
    axios.get("https://kipp-madness-api.herokuapp.com/classrooms/1.json")
      .then((roster) =>{
        let studentsObj = roster.data.students;
        this.setState({Students:studentsObj});
      });
    }

  getId(arg) {
    this.state.Students.map((student)=> {
      if (arg === student.id) {
        if (student.submissions.length > 0) {
          this.setState({Submissions:student.submissions});
        }
        }
    })
  }


    render() {
      // const messages = !this.state.submissions ? this.state.submssions : [];
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
              <Roster roster={this.state.Students} getId={this.getId}/>
              <Inbox submssions={this.state.Submissions}/>
              <Homeroom/>
            </div>
          </div>
        );
    }
}

export default TeacherLogin;
