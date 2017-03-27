import React from 'react';
import { Link } from 'react-router'
import axios from 'axios'
import Roster from './Roster.js';
import Inbox from './Inbox.js';
import Homeroom from './Homeroom.js';
import NoNewSubmissions from '../../Data/NoNewSubmissions.js';

class TeacherLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      ShowInbox: true,
      ShowRoster: true,
      ShowHomeroom: false,
      Students: [],
      Submissions:[]
    };
    this.getId = this.getId.bind(this);
    this.updateSubmssionScore = this.updateSubmssionScore.bind(this);
    this.clickInbox = this.clickInbox.bind(this);
    this.clickHomeroom = this.clickHomeroom.bind(this);
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
          console.log(student.submissions);
          this.setState({Submissions:student.submissions});
        } else {
          this.setState({Submissions: NoNewSubmissions.submissions})
        }
        }
    })
  }

  updateSubmssionScore(arg1, arg2) {
    if (arg1 === true) {
      console.log(true, arg2);
      let data = {status:true};
        axios.put(`https://kipp-madness-api.herokuapp.com/submissions/${arg2}`, data).
        then(response =>
          console.log(response))
    } else {
      console.log(false, arg2);
      let data = {status:false};
        axios.put(`https://kipp-madness-api.herokuapp.com/submissions/${arg2}`, data).
        then(response =>
          console.log(response))
    }
  }

  clickInbox() {
    this.setState({ShowInbox:true});
    this.setState({ShowRoster:true});
    this.setState({ShowHomeroom:false});
  }
  clickHomeroom() {
    this.setState({ShowInbox:false});
    this.setState({ShowRoster:false});
    this.setState({ShowHomeroom:true});
  }

    render() {
      const roster = this.state.ShowRoster ? <Roster roster={this.state.Students} getId={this.getId}/> : '';
      const inbox = this.state.ShowInbox ? <Inbox submssions={this.state.Submissions} updateSubmssionScore={this.updateSubmssionScore}/> : '';
      const homeroom = this.state.ShowHomeroom ? <Homeroom/> : '';

        return (
          <div className="teacher__container">
            <nav className="teacher__nav">
              <ul>
                <li onClick={this.clickInbox} className="teacher__nav__item">Inbox</li>
                <li onClick={this.clickHomeroom} className="teacher__nav__item">Homeroom</li>
                <li className="teacher__nav__item"><Link to="/bracket">My Bracket</Link></li>
              </ul>
            </nav>
            <h1 className="welcome__message">Select a Student to Begin</h1>
            <div className="teacher__things__container">

              {roster}
              {inbox}
              {homeroom}

            </div>
          </div>
        );
    }
}

export default TeacherLogin;
