import React from 'react';
import axios from 'axios';

class ResearchContainer extends React.Component {
  constructor() {
    super();

  }

  getCollegeData() {
   axios.get("http://api.data.gov/ed/collegescorecard/")
   .then(function(data) {
     console.log(data);
    });
   }

  render() {
    return (
      <div className="research__container">
        <nav className="research__nav">
          <ul>
            <li className="research__nav__item">Start Here!</li>
            <li className="research__nav__item">College Stats</li>
            <li className="research__nav__item">Special Programs</li>
            <li className="research__nav__item">Watch & Learn</li>
          </ul>
        </nav>
        <div className="research__start">
          <div className="college__visuals">
            <div className="college__map">
              <img src="https://www.google.com/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,MQYmmxMkSb11rVrXqbjhVUiMRzr2yAYSBbjHe9hajcF--o0juyNVgcQPEocEP8EJFCnY5yzCAiv7-uW3MG9BT5U5u_oGfVwj977iwzQG-eD8Cv3uSwTKUdesO3jaWE6gscbJLcJgo-QN0L3l66EHHkhZFENPRChecjZcshyf9mXZVhfZmEJ9VzlJcpMrEUsMqVc74LMfVeLiT7d9nduTNpw_HcOhzOUQiSsDwL45cEc_yle-2wvRHDxn-3zCBeJsb446SBDiQfE7NGvBnzID4KDzyeZQBoA"/>
            </div>
            <div className="college__logo">
              <img src="https://static1.squarespace.com/static/54341f4be4b0ebdd5103ead3/54d3d1b2e4b09df3e6abc9a2/55e75676e4b0786e908e5ea7/1442942133747/fan-feet-carolina-unc-tarheeled-rameses.png"/>
            </div>
          </div>
          <div className="college__basics">
            <h2>University of North Carolina @ Chapel Hill</h2>
            <p>Location:<span>Chapel Hill, NC</span></p>
            <p>Mascot:<span>Ramses the Tar Heel</span></p>
            <p>Mascot:<span>Ramses the Tar Heel</span></p>
            <p>Colors:<span>Blue & White</span></p>
            <p>Athletics:<span>Basketball, Baseball, etc.</span></p>
          </div>
        </div>
        <div className="research__stats"></div>
        <div className="research__programs"></div>
        <div className="research__watch"></div>
      </div>
    );
  }
}

export default ResearchContainer;
