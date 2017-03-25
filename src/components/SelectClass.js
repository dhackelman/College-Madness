import React from 'react';
import axios from 'axios';


class SelectClass extends React.Component {
  constructor() {
    super();
    this.state = {
      classes: []
    };
    this.updateHomeroom = this.updateHomeroom.bind(this);
  }
  
  componentWillMount() {
    axios.get(`https://kipp-madness-api.herokuapp.com/classrooms.json`)
      .then((response) =>{
        console.log(response);
        this.setState({classes:response.data});
      });
    }

    updateHomeroom() {
      console.log(this.props.params.user, );
      console.log(this.state.classes.id );

      // let id = this.props.params.id;
      // let data = {teacher:true};
      //   axios.put(`https://kipp-madness-api.herokuapp.com/users/${id}`, data).then(response => console.log(response));
    }

    render() {
        return (
            <div>
                <h1>Please Select Class</h1>
                <ul>
                  {this.state.classes.map((classes)=>{
                    return <li onClick={this.updateHomeroom} key={classes.id}>{classes.name}</li>;
                  })}
                </ul>
            </div>
        );
    }
}

export default SelectClass;
