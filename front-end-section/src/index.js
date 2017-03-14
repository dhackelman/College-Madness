import React from 'react';
import ReactDOM from 'react-dom';

import {browserHistory, Router, Route, IndexRoute} from 'react-router';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './styles/app.css';
import App from './components/App';
import Login from './components/Login';
import TeacherLogin from './components/Teacher';
import StudentLogin from './components/Student';
import MainBracket from './components/GameComponents/MainBracket';

import NotFound from './components/NotFound';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Login}/>
            <Route path='bracket' component={MainBracket}/>
            <Route path='teacher' component={TeacherLogin}/>
            <Route path='student' component={StudentLogin}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
), document.getElementById('main'));
