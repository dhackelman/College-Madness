import React from 'react';
import Header from './Header';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.updateFormInput = this.updateFormInput.bind(this);
    this.state = {
        Users: [],
        CurrentUser: {},
        inputData: {}
    }
  }

  componentDidMount() {
    axios.get("https://kipp-madness-api.herokuapp.com/users.json")
      .then((roster) =>{
        this.setState({Users: roster.data.users});
      });
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
  }


    render() {

        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
              updateFormInput: this.updateFormInput,
              roster: this.state.Users
            });
        });

        return (
            <div>
                <Header/> {childWithProp}
            </div>
        );
    }
}

export default App;
