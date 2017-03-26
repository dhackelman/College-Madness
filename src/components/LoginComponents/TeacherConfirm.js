import React from 'react';
import Teacher from '../TeacherComponents/Teacher';
import SelectClass from './SelectClass';
import Buttons from './ButtonConfirm';

class TeacherConfirm extends React.Component {
  constructor() {
    super();
    this.addClass = this.addClass.bind(this);

    this.state = {
      ConfirmStudent: false,
      Buttons: true
    }
  }
  addClass() {
    this.setState({Buttons: false});
    this.setState({ConfirmStudent: true});
  }
    render() {

      const confirmStudent = this.state.ConfirmStudent ? <SelectClass updateCurrentUser={this.props.updateCurrentUser} props={this.props}/> : '';
      const buttons = this.state.Buttons ? <Buttons addClass={this.addClass} props={this.props} roster={this.props.roster} /> : '';
        return (
            <div>
                  {buttons}
                  {confirmStudent}
            </div>
        );
    }
}

export default TeacherConfirm;
