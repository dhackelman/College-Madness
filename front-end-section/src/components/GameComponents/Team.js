import React from 'react';
import TeamLogo from '../../styles/images/teamLogo.png';
class Team extends React.Component {

    render() {
        return (

            <div className="team__container">
                <img src={TeamLogo}></img>
                Team #3
            </div>

        );
    }
}

export default Team;
