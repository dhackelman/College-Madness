import React from 'react';
import Team from './Team';

class Matchup extends React.Component {

    render() {
        return (

            <div className="matchup__container">
                <Team team={this.props.team1}/>
                <Team team={this.props.team2}/>
            </div>

        );
    }
}

export default Matchup;
