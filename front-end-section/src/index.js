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
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(
    <Root/>, document.querySelector('#main'));
