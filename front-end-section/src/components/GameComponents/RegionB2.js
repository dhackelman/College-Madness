import React from 'react';
import Round64 from './Round64';
import Round32 from './Round32';
import Round16 from './Round16';
import Round8 from './Round8';
class RegionB2 extends React.Component {

    render() {
        return (
            <div className="region__B">
              <Round64/>
              <Round32/>
              <Round16/>
              <Round8/>
            </div>
        );
    }
}

export default RegionB2;
