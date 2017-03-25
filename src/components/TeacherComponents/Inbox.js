import React from 'react';
import Message from './Message';
import axios from 'axios';

class Inbox extends React.Component {
  constructor() {
    super();
    this.state = {
      Messages: []
    };
    this.unfurlMessages = this.unfurlMessages.bind(this);
  }
  componentDidMount() {
      axios.get("https://kipp-madness-api.herokuapp.com/classrooms/1.json")
        .then((inbox) =>{
          this.unfurlMessages(inbox.data.students);
        });
    }

  unfurlMessages(arg) {
    let usermessages = arg;
    let messageArray = [];
    for (let i = 0; i < arg.length; i++){
      console.log(arg[i].submissions);
      for (let j = 0; j < arg[i].submissions.length; j++) {
        messageArray.push(arg[i].submissions[j]);
        }
      }
    console.log(messageArray);
    this.setState({Messages:messageArray});
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
