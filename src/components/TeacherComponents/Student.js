import React from 'react';


class Student extends React.Component {

    render() {
      return (
        <ul>
          {this.props.roster.map((user)=>{
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
    );
    }
  }
export default Student;
