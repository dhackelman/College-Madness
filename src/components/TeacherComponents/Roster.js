import React from 'react';


class Roster extends React.Component {

    render() {
      if (this.props.users === null) {
        return null;
      }
      return (
          <div className="teacher__roster">
            <span className="roster__header">Student Scholar</span>
          </div>
        );
    }
}

export default Roster;
