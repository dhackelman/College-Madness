import React from 'react';

class Homeroom extends React.Component {

    render() {
      console.log(this.props);

        return (
            <div className="teacher__homeroom">
                <h1 className="homeroom__header">This is a Homeroom</h1>
                <div className="homeroom__table">
                    <div className="row">
                        <div className="cell student__col header">
                            <span>Students</span>
                        </div>
                        <div className="cell points__col header">
                            <span>Bracket Points</span>
                        </div>
                        <div className="cell points__col header">
                            <span>Research Points</span>
                        </div>
                    </div>
                    { this.props.roster.map((student)=> {
                      return <div className="row dynamic">
                          <div className="cell student__col student">
                              <span>{student.name}</span>
                          </div>
                          <div className="cell points__col data">
                              <span>{student.bracket_points}</span>
                          </div>
                          <div className="cell points__col data">
                              <span>{student.research_points}</span>
                          </div>
                      </div>
                    })}
                </div>
            </div>
        );
    }
}

export default Homeroom;
