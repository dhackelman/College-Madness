import React from 'react';
import Region from './Region';

// import EliteEight from './EliteEight';
// <EliteEight key={setRegion[0].team.region} setRegion={region} searchWins={this.props.searchWins} updateSelectedTeam={this.props.updateSelectedTeam} />

class MainBracket extends React.Component {
    shouldComponentUpdate(nextProps) {
      if(nextProps.East.length > 0) {
        return true;
      } else {
        return false;
      }
    }

    componentWillUpdate(nextProps) {
        console.log("in will update yo");
    }


    render() {
      const eastern = this.props.East;
      const western = this.props.West;
      const midwestern = this.props.Midwest;
      const southern = this.props.South;
        let regions = [eastern, western, midwestern, southern];

        return (
            <div className="component__container">
              {regions.map((region) => {

                  const setRegion = region;
                  // console.log('set region ', setRegion);
                  return <Region key={setRegion[0].team.region} setRegion={region} searchWins={this.props.searchWins} updateSelectedTeam={this.props.updateSelectedTeam}></Region>;
              })}

            </div>
        );
    }
}

export default MainBracket;
