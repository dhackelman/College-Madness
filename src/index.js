import React from 'react';
import ReactDOM from 'react-dom';

import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import './styles/app.css';
import App from './components/App';
import Login from './components/Login';
import Teacher from './components/TeacherComponents/Teacher';
import Homeroom from './components/TeacherComponents/Homeroom';
import TeacherConfirm from './components/LoginComponents/TeacherConfirm';
import MainBracket from './components/GameComponents/MainBracket';
import ResearchContainer from './components/ResearchComponents/ResearchContainer';

import NotFound from './components/NotFound';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Login}/>
            <Route path='bracket' component={MainBracket}/>
            <Route path='teacher' component={Teacher}/>
            <Route path='teacher-confirm/:users' component={TeacherConfirm}/>
            <Route path='homeroom' component={Homeroom}/>
            <Route path='research/:id' component={ResearchContainer}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
), document.getElementById('main'));
