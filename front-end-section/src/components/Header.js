import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div className="header__container">
                <div className="header__logo">logo</div>
                <div className="header__homerooom">homeroom</div>
                <span className="header__logout kippBtn">Logout</span>

            </div>
        );
    }
}

export default Header;
