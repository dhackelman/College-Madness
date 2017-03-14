import React from 'react';
import Round64 from './Round64';
import Round32 from './Round32';
import Round16 from './Round16';
import Round8 from './Round8';

class RegionB1 extends React.Component {


    render() {
        return (
            <div className="region__B">
                <Round8/>
                <Round16/>
                <Round32/>
                <Round64/>
            </div>
        );
    }
}

export default RegionB1;
