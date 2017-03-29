import React from 'react';



class Roster extends React.Component {

  render() {
    return (
        <div className="teacher__roster">
          <span className="roster__header">Homeroom</span>
          <ul className="roster__student">
            {this.props.roster.map((student)=> {
              return <li onClick={()=>{this.props.getId(student.id)}} key={student.id}>{student.name}</li>
            })}
          </ul>
        </div>
      );
  }
}

export default Roster;
