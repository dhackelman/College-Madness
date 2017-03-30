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
      Submissions:[],
      Overlay:false
    };
    this.getId = this.getId.bind(this);
    this.updateSubmssionScore = this.updateSubmssionScore.bind(this);
    this.clickInbox = this.clickInbox.bind(this);
    this.clickHomeroom = this.clickHomeroom.bind(this);
  }

  componentDidMount() {
    axios.get("https://kipp-madness-api.herokuapp.com/classrooms/2.json")
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
          return arg;
        } else {
          this.setState({Submissions: NoNewSubmissions.submissions});
          return arg;
        }
      }
      return arg;
    })
    this.setState({Overlay:true});
  }

  updateSubmssionScore(arg1, arg2) {
    if (arg1 === true) {
      let data = {status:true};
        axios.put(`https://kipp-madness-api.herokuapp.com/submissions/${arg2}`, data)
        .then((response) =>{
          return;
        });
    } else {
      let data = {status:false};
        axios.put(`https://kipp-madness-api.herokuapp.com/submissions/${arg2}`, data)
        .then((response) => {
          return;
        });
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
      const homeroom = this.state.ShowHomeroom ? <Homeroom roster={this.state.Students}/> : '';

        return (
          <div className="teacher__container">
            <nav className="nav__container">
              <ul>
                <li onClick={this.clickInbox} className={ this.state.ShowRoster ? 'nav__items is__active': 'nav__items' } >Inbox</li>
                <li onClick={this.clickHomeroom} className={ this.state.ShowHomeroom ? 'nav__items is__active': 'nav__items' }>Homeroom</li>
                <Link className="nav__items"to="/bracket"><li>My Bracket</li></Link>
              </ul>
            </nav>
            <h1 className="welcome__message"></h1>
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
