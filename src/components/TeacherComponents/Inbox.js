import React from 'react';
import Message from './Message';
import axios from 'axios';

class Inbox extends React.Component {
  constructor() {
    super();
    this.iterateStudentInput = this.iterateStudentInput.bind(this);
    this.state = {
      Messages: [],
      ActualMessages: []
    };
  }
  componentWillMount() {
      axios.get("https://kipp-madness-api.herokuapp.com/classrooms/1.json")
        .then((inbox) =>{
          this.setState({Messages:inbox.data.students});
        });

    }

  iterateStudentInput(arg) {
    console.log('arg --> ', arg);
    let messageInnards = arg;
    let butts = [];
    for (let i=0; i < messageInnards.length; i++) {
      let obj = messageInnards[i];
      butts.push(Object.keys(obj).map(key => obj[key]));
      }
      console.log(butts);

      // console.log('init', arr);
      // arr[2].map((stud)=> {
      //   let studObj = stud;
      //   let studArr = Object.keys(studObj).map(key => studObj[key]);
      //   let actualMessages = studArr[3];
      //   console.log(actualMessages);
      //   });
      // });
    }

  // for (let i=0; i < messageInnards.length; i++) {
  //   var arg1 = messageInnards[i];
  //   var argArray = Object.keys(arg1).map((key) => {
  //       allmessages.push(arg1[key]);
  //     });
  //     console.log("after iter", allmessages);

    render() {
        return (
          <div className="teacher__inbox">
            <p className="inbox__header">Room 2105</p>
            <Message messages={this.state.Messages} iterate={this.iterateStudentInput}/>
          </div>
        );
    }
}

export default Inbox;
