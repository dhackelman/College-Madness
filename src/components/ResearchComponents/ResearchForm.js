import React from 'react';

class ResearchForm extends React.Component {
  sendData(event) {
      event.preventDefault();
      const formData = {
          input: this.input.value
      }
      console.log(formData);
      this.inputForm.reset();
  } // end of data func

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
