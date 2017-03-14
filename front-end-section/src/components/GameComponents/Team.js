import React from 'react';
import TeamLogo from '../../styles/images/teamLogo.png';
class Team extends React.Component {

    render() {
        return (

            <div className="team__container">
                <img className="team__logo" src={TeamLogo}></img>
                <span className="team__seed">#1</span>
                <span className="team__name">UNC</span>
            </div>

        );
    }
}

export default Team;
