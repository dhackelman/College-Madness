import React from 'react';
import { Link } from 'react-router';
import Logout from './Logout';
import classNames from 'classnames/bind';

import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';

class Header extends React.Component {
  constructor() {
    super();
    this.smallHeader = this.smallHeader.bind(this);
  }
  // <h1><Link to="/teacher"><FaGraduationCap size={50}/>
  //     My Homeroom</Link></h1>
  smallHeader() {
    return classNames({
      'header__small': this.props.small,
      'header__logo': !this.props.small
    })
  }

    render() {
        const logout = this.props.updateBtn ? <Logout/> : <div className="empty__container"></div>;
        return (
            <div className="header__container">
                <img className={this.smallHeader()} src={require('../styles/images/CM-logo.png')} alt={"KIPP Logo"}/>
                <div className="header__homerooom">
                    <h1><Link to="/teacher"><FaGraduationCap size={50}/>
                        Classroom UNC</Link></h1>

                </div>
                {logout}
            </div>
        );
    }
}

export default Header;
