import React from 'react';
import axios from 'axios';

class Homeroom extends React.Component {
  constructor() {
    super();
    this.state = {
      Students: []
    }
  }

  componentDidMount() {
    axios.get("https://kipp-madness-api.herokuapp.com/classrooms/2.json")
      .then((roster) =>{
        let studentsObj = roster.data.students;
        this.setState({Students:studentsObj});
      });
    }

    render() {
      console.log(this.state.Students);

        return (

          <div className="teacher__things__container">
            <div className="teacher__homeroom">
                <h1 className="homeroom__header">Homeroom Leaderboard</h1>
                  <table className="homeroom__table">
                    <tbody className="homeroom__table__body">
                      <tr className="header__row">
                        <th className="cell student__col header">Student</th>
                        <th className="cell points__col header">Bracket Score</th>
                        <th className="cell points__col header">Research Score</th>
                        <th className="cell points__col header">Total Score</th>
                      </tr>
                      {this.state.Students.map((student)=> {
                        return <tr key={student.name} className="student__row">
                          <td className="cell student__col student">{student.name}</td>
                          <td className="cell points__col data">{student.bracket_points}</td>
                          <td className="cell points__col data">{student.research_points}</td>
                          <td className="cell points__col data">{student.score}</td>
                        </tr>
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
        );
    }
}

export default Homeroom;
