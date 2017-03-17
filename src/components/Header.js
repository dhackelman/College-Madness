import React from 'react';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';

class Header extends React.Component {

    render() {
        return (
            <div className="header__container">
                <img className="header__logo" src={require('../styles/images/KIPP-Logo.png')} alt={"KIPP Logo"}/>
                <div className="header__homerooom">

                    <h1><FaGraduationCap size={50}/>
                        Anders</h1>
                </div>
                <span className="header__logout kippBtn">Logout</span>
            </div>
        );
    }
}

export default Header;
