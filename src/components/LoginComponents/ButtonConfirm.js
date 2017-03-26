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
  // const rosterId =
  // confirmNo(users, userId) {
  //   const rosterId = this.props.roster.map((match) => {
  //     if(match.id === Number(this.props.props.params.users)) {
  //       console.log('match id ', match.id);
  //       this.setState({CurrentUser: match.id});
  //     }
  //   });
  // }

    render() {
      // console.log('state of currentUser ', this.state.CurrentUser);

        return (
            <div>
              <h1>Are You a Teacher?</h1>
              <div className="login__container">
                      <Link to="teacher" onClick={this.confirmYes} className="confirm__button confirm__yes">Yes!</Link>
                      <button onClick={this.props.addClass} className="confirm__no">No</button>
              </div>
            </div>
        );
    }
}

export default Buttons;
