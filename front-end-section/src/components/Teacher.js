import React from 'react';

class TeacherLogin extends React.Component {

    render() {
        return (
          <div className="teacher__container">
            <nav className="teacher__nav">
              <ul>
                <li className="teacher__nav__item">Inbox</li>
                <li className="teacher__nav__item">Leaderboard</li>
                <li className="teacher__nav__item">Homeroom</li>
              </ul>
            </nav>
            <h1 className="welcome__message">Welcome Teacher!</h1>
            <div className="teacher__things__container">
              <div className="teacher__roster">
                <span className="roster__header">Student Scholar</span>
                <span className="roster__student">Student Scholar</span>
                <span className="roster__student">Student Scholar</span>
                <span className="roster__student">Student Scholar</span>
                <span className="roster__student">Student Scholar</span>
                <span className="roster__student">Student Scholar</span>
                <span className="roster__student">Student Scholar</span>
              </div>
              <div className="teacher__inbox">
                <p className="inbox__header">Room 2105</p>
                <div className="inbox__messages">
                  <div className="inbox__single">
                    <p>This is a message from your student. Read it and Weep.</p>
                    <button className="inbox__pass">Pass</button>
                    <button className="inbox__fail">Fail</button>
                  </div>
                  <div className="inbox__single">
                    <p>This is a message from your student. Read it and Weep.</p>
                    <button className="inbox__pass">Pass</button>
                    <button className="inbox__fail">Fail</button>
                  </div>
                  <div className="inbox__single">
                    <p>This is a message from your student. Read it and Weep.</p>
                    <button className="inbox__pass">Pass</button>
                    <button className="inbox__fail">Fail</button>
                  </div>
                  <div className="inbox__single">
                    <p>This is a message from your student. Read it and Weep.</p>
                    <button className="inbox__pass">Pass</button>
                    <button className="inbox__fail">Fail</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default TeacherLogin;
