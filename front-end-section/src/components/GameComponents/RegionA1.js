import React from 'react';
import {Link} from 'react-router';
import Round64 from './Round64';
import Round32 from './Round32';
import Round16 from './Round16';
import Round8 from './Round8';

class RegionA1 extends React.Component {

    render() {
        return (
            <div className="region__A">

                <Round64/>
                <div className="bracket__connect64-32">
                    <div className="bracket__connector"></div>
                    <div className="bracket__connector"></div>
                    <div className="bracket__connector"></div>
                    <div className="bracket__connector"></div>
                    <div className="bracket__connector"></div>
                    <div className="bracket__connector"></div>
                    <div className="bracket__connector"></div>
                    <div className="bracket__connector"></div>
                </div>
                <Round32/>
                <div className="bracket__connect32-16"></div>
                <Round16/>
                <div className="bracket__connect16-8"></div>
                <Round8/>
            </div>
        );
    }
}

export default RegionA1;
