import React from 'react';

class ResearchForm extends React.Component {

    render() {
        return (
              <div className="research__form">
                  <h2>Show What You Know</h2>
                  <form>
                      <textarea placeholder="Dear Ms. Edmonson,"></textarea>
                      <input type="submit"></input>
                  </form>
              </div>
        );
    }
}

export default ResearchForm;
