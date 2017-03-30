import React from 'react';
import { Link } from 'react-router';
import Logout from './Logout';

import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';

class Header extends React.Component {


  componentDidMount() {
    console.log(this.props.curUser);
  }

    render() {
        const logout = this.props.updateBtn ? <Logout/> : <div className="empty__container"></div>;
        return (
            <div className="header__container">
                <img className="header__logo" src={require('../styles/images/College-madness-logo-dark.png')} alt={"KIPP Logo"}/>
                <div className="header__homerooom">
                    <h1><Link to="/homeroom"><FaGraduationCap size={40}/>
                        Classroom UNC</Link></h1>
                </div>
                {logout}
            </div>
        );
    }
}

export default Header;
