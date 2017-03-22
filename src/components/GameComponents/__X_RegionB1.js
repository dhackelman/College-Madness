// import React from 'react';
// import Round64 from './Round64';
// import Round32 from './Round32';
// import Round16 from './Round16';
// // import Round8 from './Round8';
// // Rounds 4, 2 & Win in region B2
// import SignMidwest from './SignMidwest';
//
// import {filterByRegion} from '../../helper.js';
//
// class RegionB1 extends React.Component {
//
//     render() {
//         const teams = filterByRegion("Midwest", this.props.TeamData.teams);
//
//         return (
//             <div className="region__B1">
//                 <Round16 update={this.props.update} searchWins={this.props.searchWins} TeamData={teams}></Round16>
//                 <Round32 update={this.props.update} searchWins={this.props.searchWins} TeamData={teams}></Round32>
//                 <Round64 update={this.props.update} TeamData={teams}></Round64>
//
//                 <SignMidwest/>
//             </div>
//         );
//     }
// }
//
// export default RegionB1;
