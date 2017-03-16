import React from 'react';
import Team from './Team';

class Matchup extends React.Component {

    render() {
        return (

            <div className="matchup__container">
                <Team update={this.props.update} team={this.props.team1}/>
                <Team update={this.props.update} team={this.props.team2}/>
            </div>

        );
    }
}

export default Matchup;
