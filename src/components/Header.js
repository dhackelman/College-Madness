import React from 'react';
import { Link } from 'react-router';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';

class Header extends React.Component {

    render() {
        return (
            <div className="header__container">
                <img className="header__logo" src={require('../styles/images/KIPP-Logo.png')} alt={"KIPP Logo"}/>
                <div className="header__homerooom">
                    <h1><Link to="/teacher"><FaGraduationCap size={50}/>
                        My Homeroom</Link></h1>
                </div>
                <span className="header__logout kippBtn"><Link to="/">Logout</Link></span>
            </div>
        );
    }
}

export default Header;
