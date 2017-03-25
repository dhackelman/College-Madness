import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

class TeacherConfirm extends React.Component {
  constructor() {
    super();
    this.confirm__yes = this.confirm__yes.bind(this);
  }

  confirm__yes() {
    console.log(this.props.params.id, "yes");
    let id = this.props.params.id;
    let data = {teacher:true};
      axios.put(`https://kipp-madness-api.herokuapp.com/users/${id}`, data).then(response => console.log(response));
  }


    render() {
        const selectMyClass = "select-class/" + this.props.params.id;
        return (
            <div>
                <h1>Are You a Teacher?</h1>
                <div className="login__container">
                        <button onClick={this.confirm__yes} className="confirm__button confirm__yes">Yes!</button>
                        <Link to={selectMyClass} className="confirm__link"><button className="confirm__no">No</button></Link>
                </div>
            </div>
        );
    }
}

export default TeacherConfirm;
