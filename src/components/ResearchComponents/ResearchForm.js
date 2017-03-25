import React from 'react';

class ResearchForm extends React.Component {
  sendData(event) {
      event.preventDefault();
      const formData = {
          student_id: null,
          team_id: null,
          input: this.input.value

      }
      this.props.updateFormInput(formData);
      this.inputForm.reset();
  }

    render() {
        return (
              <div className="research__form">
                  <h2>Show What You Know</h2>
                  <form ref={(input) => this.inputForm = input} onSubmit={(event) => this.sendData(event)}>
                      <textarea ref={(input) => this.input = input} placeholder="Dear Ms. Edmonson,"></textarea>
                      <input type="submit"></input>
                  </form>
              </div>
        );
    }
}

export default ResearchForm;
