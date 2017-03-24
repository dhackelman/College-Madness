import React from 'react';
import Region from './Region';
import axios from 'axios';

// import EliteEight from './EliteEight';

class MainBracket extends React.Component {
  constructor() {
    super();
    this.filterByRegion = this.filterByRegion.bind(this);
    this.state = {
      AllTeams: [],
      East: [],
      West: [],
      Midwest: [],
      South: []
    };
  }
  componentDidMount() {
    axios.get("https://kipp-madness-api.herokuapp.com/users/3.json")
      .then((response) =>{

        const regionalBreakdown = response.data.user_predictions;
        this.filterByRegion(1, regionalBreakdown);
        this.filterByRegion(2, regionalBreakdown);
        this.filterByRegion(3, regionalBreakdown);
        this.filterByRegion(4, regionalBreakdown);
        this.setState({AllTeams: regionalBreakdown});
      });
    }

    filterByRegion(region, data) {
        const teams = data.filter((val) => {
          // return val.team.region === region;
            return val.team.region === region;
        });
        if (region === 1) {
            this.setState({East: teams});
        }
        if (region === 2) {
            this.setState({West: teams});
        }
        if (region === 3) {
            this.setState({Midwest: teams});
    
        }
        if (region === 4) {
            this.setState({South: teams});

        }
        // console.log('teams ', teams);
        return
    }


    render() {
      if (!this.state.AllTeams.length) {
        return (<h1>Loading</h1>);
      }
        return (
            <div className="component__container">
              <Region teams={this.state.East} />
              <Region teams={this.state.West} />
              <Region teams={this.state.Midwest} />
              <Region teams={this.state.South} />
            </div>
        );
    }
}

export default MainBracket;
