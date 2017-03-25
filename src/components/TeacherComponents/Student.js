import React from 'react';


class Student extends React.Component {

    render() {
      console.log('roster props ', this.props.roster);
      return (
        <ul className="roster__student">
          {this.props.roster.map((user)=>{
            return <li  key={user.id}>{user.name}</li>;
          })}
        </ul>
    );
    }
  }
export default Student;
