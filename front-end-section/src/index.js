import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
import './styles/app.css';
import App from './components/App';
// import Header from './components/Header';
import MainBracket from './components/GameComponents/MainBracket';
import RegionA1 from './components/GameComponents/RegionA1';
import RegionA2 from './components/GameComponents/RegionA2';
import RegionB1 from './components/GameComponents/RegionB1';
import RegionB2 from './components/GameComponents/RegionB2';
import Round64 from './components/GameComponents/Round64';
import Round32 from './components/GameComponents/Round32';
import Round16 from './components/GameComponents/Round16';
import Round8 from './components/GameComponents/Round8';
import Round4 from './components/GameComponents/Round4';
import Round2 from './components/GameComponents/Round2';
import RoundWin from './components/GameComponents/RoundWin';
import Matchup from './components/GameComponents/Matchup';
import Team from './components/GameComponents/Team';

import NotFound from './components/NotFound';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern='/' component={App}/>
                <Match pattern='/bracket' component={MainBracket}/>
                <Match pattern='/east' component={RegionA1}/>
                <Match pattern='/west' component={RegionA2}/>
                <Match pattern='/midwest' component={RegionB1}/>
                <Match pattern='/south' component={RegionB2}/>
                <Match pattern='/round64' component={Round64}/>
                <Match pattern='/round32' component={Round32}/>
                <Match pattern='/round16' component={Round16}/>
                <Match pattern='/round8' component={Round8}/>
                <Match pattern='/round4' component={Round4}/>
                <Match pattern='/round2' component={Round2}/>
                <Match pattern='/roundWin' component={RoundWin}/>
                <Match pattern='/matchup' component={Matchup}/>
                <Match pattern='/team/:teamId' component={Team}/>

                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(
    <Root/>, document.querySelector('#main'));
