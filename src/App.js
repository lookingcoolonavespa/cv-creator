import React, { Component } from 'react';
import Personal from './components/Personal.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import Button from './components/Button.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(key, val) {
    this.setState({ [key]: val });
  }

  handleBlockChange(blockID, key, val) {
    this.setState((prevState) => {
      if (prevState[blockID] === undefined) prevState[blockID] = {};
      prevState[blockID][key] = val;
      return { [blockID]: prevState[blockID] };
    });
    console.log(this.state);
  }

  onSubmit() {}

  render() {
    return (
      <div>
        <Personal
          onNameChange={(e) => this.handleChange('name', e)}
          onAddressChange={(e) => this.handleChange('address', e)}
          onPhoneChange={(e) => this.handleChange('phone', e)}
          onEmailChange={(e) => this.handleChange('email', e)}
        />
        <Experience />
        <Education
          onSchoolChange={(e, id) => this.handleBlockChange(id, 'school', e)}
          onCityChange={(e, id) => this.handleBlockChange(id, 'city', e)}
          onDegreeChange={(e, id) => this.handleBlockChange(id, 'degree', e)}
          onSubjectChange={(e, id) => this.handleBlockChange(id, 'subject', e)}
          onFromChange={(e, id) => this.handleBlockChange(id, 'From', e)}
          onToChange={(e, id) => this.handleBlockChange(id, 'To', e)}
        />
        <Button text="Submit" clickEvent={this.onSubmit} />
      </div>
    );
  }
}

export default App;
