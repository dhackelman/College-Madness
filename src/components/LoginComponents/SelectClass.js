import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class SelectClass extends React.Component {
  constructor() {
    super();
    this.state = {
      Classes: [],
      CurrentUser: {}
    };
    this.updateHomeroom = this.updateHomeroom.bind(this);
  }

  componentWillMount() {
    axios.get(`https://kipp-madness-api.herokuapp.com/classrooms.json`)
      .then((response) =>{
        console.log(response);
        this.setState({Classes:response.data});
      });
    }

    updateHomeroom(arg) {
      const id = Number(this.props.props.params.users);
      this.props.updateCurrentUser(id);
      const data = {classroom_id: arg};
      axios.put(`https://kipp-madness-api.herokuapp.com/users/${id}`, data).then(response => console.log(response));
    }

    render() {
        return (
            <div>
                <h1>Please Select Class</h1>

                  {this.state.Classes.map((classes)=>{
                      return <Link to="/bracket" value={classes.id} onClick={() => this.updateHomeroom(classes.id)} key={classes.id}>{classes.name}</Link>;
                    })}
            </div>
        );
    }
}

export default SelectClass;
