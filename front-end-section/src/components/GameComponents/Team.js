import React from 'react';
import TeamLogo from '../../styles/images/teamLogo.png';
class Team extends React.Component {

    render() {
        return (
            <div className="team__container">


              <div className="team__container">
               <img src={TeamLogo}></img>
                Team #1
              </div>
              <div className="team__container">
                <img src={TeamLogo}></img>
                Team #3
              </div>

            </div>
        );
    }
}

export default Team;
