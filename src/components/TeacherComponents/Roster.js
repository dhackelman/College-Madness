import React from 'react';
import Student from './Student';
import axios from 'axios';



class Roster extends React.Component {
  constructor() {
    super();
    this.state = {
      Users: []
    };
  }
  componentDidMount() {
    axios.get("https://kipp-madness-api.herokuapp.com/users.json")
      .then((roster) =>{
        this.setState({Users: roster.data.users});
      });
    }

  render() {

    return (
        <div className="teacher__roster">
          <span className="roster__header">Student Scholar</span>
          <Student roster={this.state.Users} />
        </div>
      );
  }
}

export default Roster;
