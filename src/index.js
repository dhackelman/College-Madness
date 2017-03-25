import React from 'react';
import ReactDOM from 'react-dom';

import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import './styles/app.css';
import App from './components/App';
import Login from './components/Login';
import TeacherConfirm from './components/TeacherConfirm';
import TeacherLogin from './components/TeacherComponents/Teacher';
import SelectClass from './components/SelectClass';
import StudentLogin from './components/Student';
import MainBracket from './components/GameComponents/MainBracket';
import ResearchContainer from './components/ResearchComponents/ResearchContainer';
import ResearchAcademicStats from './components/ResearchComponents/ResearchAcademicStats';

import NotFound from './components/NotFound';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Login}/>
            <Route path='bracket' component={MainBracket}/>
            <Route path='teacher' component={TeacherLogin}/>
            <Route path='teacher-confirm/:id' component={TeacherConfirm}/>
            <Route path='select-class/:user' component={SelectClass}/>
            <Route path='student' component={StudentLogin}/>
            <Route path='research/:id' component={ResearchContainer}/>
            <Route path='researchAcademics' component={ResearchAcademicStats}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
), document.getElementById('main'));
