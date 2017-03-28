import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class CreateClass extends React.Component {
  constructor() {
    super();
    this.state = {
      Classes: [],
      CurrentUser: {}
    };
    this.chooseClass = this.chooseClass.bind(this);
  }
  componentWillMount() {
    axios.get(`https://kipp-madness-api.herokuapp.com/classrooms.json`)
      .then((response) =>{
        // console.log(response);
        this.setState({Classes:response.data});
      });
    }

  // createClass(event) {
  //     event.preventDefault();
  //     const formData = {
  //         name: this.input.value
  //     }
  //     this.props.createClass(formData);
  //     this.createForm.reset();
  // }

    chooseClass(arg) {
      const id = Number(this.props.user);
      this.props.updateCurrentUser(id);
      const data = {classroom_id: arg};
      axios.put(`https://kipp-madness-api.herokuapp.com/users/${id}`, data).then(response => console.log(response));
    }

    render() {
        return (
            <div>
              <div className="pickClass__container">
                <h1 className="pickClass__title">Please Select Class</h1>
                  <ul>
                  {this.state.Classes.map((classes)=>{
                      return <Link className="pickClass__items" to="teacher" value={classes.id} onClick={() => this.chooseClass(classes.id)} key={classes.id}><li>{classes.name}</li></Link>;
                    })}
                  </ul>
              </div>
            </div>
        );
    }
}

export default CreateClass;
