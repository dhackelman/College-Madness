import React from 'react';
import axios from 'axios';
import map from 'lodash/map';

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

      // console.log('params user ', this.props.params.user, );
      // console.log(this.state.Classes.id );
      // let id = this.props.params.id;
      // let data = {teacher:true};
      //   axios.put(`https://kipp-madness-api.herokuapp.com/users/${id}`, data).then(response => console.log(response));
      console.log('params user ', this.props);
      console.log('class name ', arg);
    }



    render() {

// onClick={this.updateHomeroom}


        return (
            <div>
                <h1>Please Select Class</h1>

                  {this.state.Classes.map((classes)=>{
                    console.log('classes --> ', classes);
                      return <button value={classes.id} onClick={() => this.updateHomeroom(classes.id)} key={classes.id}>{classes.name}</button>;
                    })}
            </div>
        );
    }
}

export default SelectClass;
