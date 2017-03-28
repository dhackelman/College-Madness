import React from 'react';
import { Link } from 'react-router';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';

class Header extends React.Component {

    render() {
        return (
            <div className="header__container">
                <img className="header__logo" src={require('../styles/images/CM-logo.png')} alt={"KIPP Logo"}/>
                <div className="header__homerooom">
                    <h1><Link to="/teacher"><FaGraduationCap size={50}/>
                        Classroom UNC</Link></h1>
                </div>
                <Link className="header__logout kippBtn" to="/">Logout</Link>
            </div>
        );
    }
}

export default Header;
