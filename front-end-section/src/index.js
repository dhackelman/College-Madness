import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
import './styles/app.css';
import App from './components/App';
import MainBracket from './components/GameComponents/MainBracket';
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
                <Match pattern='/matchup' component={MatchUp}/>
                <Match pattern='/team/:teamId' component={Team}/>

                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(
    <Root/>, document.querySelector('#main'));
