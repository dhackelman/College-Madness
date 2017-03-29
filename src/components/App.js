import React from 'react';
import Header from './Header';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.updateFormInput = this.updateFormInput.bind(this);
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
    this.updateLogoutBtn = this.updateLogoutBtn.bind(this);


    this.state = {
        Users: [],
        CurrentUser: {},
        inputData: {},
        showLogout: false
    }
  }

  componentDidMount() {
    axios.get("https://kipp-madness-api.herokuapp.com/users.json")
      .then((roster) =>{
        this.setState({Users: roster.data.users});
      });
    }

    updateLogoutBtn() {
      if(this.state.showLogout === true) {
        this.setState({showLogout: false})
      } else {
        this.setState({showLogout: true})
      }
    }


    updateCurrentUser(id) {
      this.setState({CurrentUser: id})
    }


    // confirmNo() { // Button Confirm Component -->
    //   const rosterId = this.state.Users.map((match) => {
    //     if(match.id === Number(this.props.props.params.users)) {
    //       console.log('match id ', match.id);
    //       this.setState({CurrentUser: match.id});
    //     }
    //   });
    // }

  updateFormInput(formData) {
      const inputData = {
          ...this.state.inputData
      }
      const timestamp = Date.now();
      inputData[`input-${timestamp}`] = formData;
      this.setState({inputData: inputData});
      axios.post("https://kipp-madness-api.herokuapp.com/submissions", formData)
        .then((response) =>{
          console.log('response from submssion ', response);
        });
  }


    render() {
        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
              updateFormInput: this.updateFormInput,
              roster: this.state.Users,
              user: this.state.CurrentUser,
              updateCurrentUser: this.updateCurrentUser,
              createClass: this.createClassFormInput,
              logout: this.state.showLogout,
              updateLogout: this.updateLogoutBtn
            });
        });

        return (
            <div>
                <Header updateBtn={this.state.showLogout}/> {childWithProp}
            </div>
        );
    }
}

export default App;
