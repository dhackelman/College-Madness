import React from 'react';
// import Container from '../Container';
import RegionA1 from './RegionA1';
import RegionA2 from './RegionA2';
import RegionB1 from './RegionB1';
import RegionB2 from './RegionB2';
import EliteEight from './EliteEight';

class MainBracket extends React.Component {

    render() {
        return (
            <div className="component__container">

                <RegionA1 TeamData={this.props.TeamData} update={this.props.updateSelectedTeam} searchWins={this.props.searchWins}/>
                <RegionB1 TeamData={this.props.TeamData} update={this.props.updateSelectedTeam} searchWins={this.props.searchWins}/>
                <RegionA2 TeamData={this.props.TeamData} update={this.props.updateSelectedTeam} searchWins={this.props.searchWins}/>
                <RegionB2 TeamData={this.props.TeamData} update={this.props.updateSelectedTeam} searchWins={this.props.searchWins}/>
                <EliteEight TeamData={this.props.TeamData} update={this.props.updateSelectedTeam} searchWins={this.props.searchWins}/>

            </div>
        );
    }
}

export default MainBracket;
