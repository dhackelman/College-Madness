import React from 'react';
import Message from './Message';
import axios from 'axios';

class Inbox extends React.Component {
  constructor() {
    super();
    this.state = {
      Messages: []
    };
  }
  componentDidMount() {
    axios.get("https://kipp-madness-api.herokuapp.com/users.json")
      .then((roster) =>{
        this.setState({Messages: roster.data.users});
        console.log(roster.data.users);
      });
    }

    render() {
        return (
          <div className="teacher__inbox">
            <p className="inbox__header">Room 2105</p>
            <Message messages={this.state.Messages}/>
          </div>
        );
    }
}

export default Inbox;
