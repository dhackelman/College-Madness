import React from 'react';

class TeacherConfirm extends React.Component {

    render() {
        return (
            <div>
                <h1>Are You a Teacher?</h1>
                <div className="login__container">
                        <button className="confirm__button confirm__yes">Yes!</button>
                        <button className="confirm__button confirm__no">No</button>
                </div>
            </div>
        );
    }
}

export default TeacherConfirm;
