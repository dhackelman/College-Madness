import React from 'react';
import FinalTeam from './FinalTeam';

class RoundWin extends React.Component {

    render() {
        return (
            <div className="round_1__container">
                <FinalTeam TeamData={this.props.TeamData} searchWins={this.props.searchWins}/>
            </div>
        );
    }
}

export default RoundWin;
