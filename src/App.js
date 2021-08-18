import React, { Component } from 'react';
import Personal from './components/Personal.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import Button from './components/Button.js';
import Resume from './components/Resume.js';

import uniqid from 'uniqid';

import './globalStyles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { submitted: false };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlockChange = this.handleBlockChange.bind(this);
    this.handleAddBlock = this.handleAddBlock.bind(this);
    this.handleDeleteBlock = this.handleDeleteBlock.bind(this);
    this.onEdit = this.onEdit.bind(this);

    this.form = React.createRef();
  }

  handleChange(key, val) {
    this.setState({ [key]: val });
  }

  handleBlockChange(type, blockID, key, val) {
    this.setState((prevState) => {
      if (prevState[type] === undefined) prevState[type] = {};
      if (prevState[type][blockID] === undefined) prevState[type][blockID] = {};
      prevState[type][blockID][key] = val;
      return { [type]: prevState[type] };
    });
  }

  handleAddBlock(type) {
    if (this.state[type] === undefined) this.setState({ [type]: {} });
    const newID = uniqid();
    this.setState((prevState) => {
      prevState[type][newID] = {};
      return { [type]: prevState[type] };
    });
  }
  handleDeleteBlock(type, id) {
    if (this.state[type] === undefined) return;
    if (this.state[type][id] === undefined) return;

    this.setState((prevState) => {
      const copy = { ...prevState };
      delete copy[type][id];
      if (Object.keys(copy[type]).length === 0) delete copy[type];

      return copy;
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.form.current.reportValidity()) {
      this.setState({ displayErrors: true });
      return;
    }

    this.setState({ submitted: true });
  }

  onEdit() {
    this.setState({ submitted: false });
    console.log(this.state);
  }

  render() {
    const { displayErrors } = this.state;
    return (
      <div id="resume">
        {this.state.submitted === true && (
          <div>
            <Button type="button" text="Edit" clickEvent={this.onEdit} />
            <Resume
              name={this.state.name}
              address={this.state.address}
              phone={this.state.phone}
              email={this.state.email}
              expBlock={this.state.expBlock}
              eduBlock={this.state.eduBlock}
            />
          </div>
        )}
        {this.state.submitted === false && (
          <form
            ref={this.form}
            onSubmit={this.onSubmit}
            className={displayErrors ? 'display-errors' : ''}
            noValidate
          >
            <Personal
              onNameChange={(e) => this.handleChange('name', e)}
              onAddressChange={(e) => this.handleChange('address', e)}
              onPhoneChange={(e) => this.handleChange('phone', e)}
              onEmailChange={(e) => this.handleChange('email', e)}
              nameVal={this.state.name}
              addressVal={this.state.address}
              phoneVal={this.state.phone}
              emailVal={this.state.email}
            />
            <Experience
              onPosChange={(e, id) =>
                this.handleBlockChange('expBlock', id, 'position', e)
              }
              onCompChange={(e, id) =>
                this.handleBlockChange('expBlock', id, 'company', e)
              }
              onCityChange={(e, id) =>
                this.handleBlockChange('expBlock', id, 'city', e)
              }
              onFromChange={(e, id) =>
                this.handleBlockChange('expBlock', id, 'from', e)
              }
              onToChange={(e, id) =>
                this.handleBlockChange('expBlock', id, 'to', e)
              }
              onDeetsChange={(e, id) =>
                this.handleBlockChange('expBlock', id, 'details', e)
              }
              onAddBlock={() => this.handleAddBlock('expBlock')}
              onDeleteBlock={(id) => this.handleDeleteBlock('expBlock', id)}
              allBlocks={this.state.expBlock || ''}
            />
            <Education
              onSchoolChange={(e, id) =>
                this.handleBlockChange('eduBlock', id, 'school', e)
              }
              onCityChange={(e, id) =>
                this.handleBlockChange('eduBlock', id, 'city', e)
              }
              onDegreeChange={(e, id) =>
                this.handleBlockChange('eduBlock', id, 'degree', e)
              }
              onFromChange={(e, id) =>
                this.handleBlockChange('eduBlock', id, 'from', e)
              }
              onToChange={(e, id) =>
                this.handleBlockChange('eduBlock', id, 'to', e)
              }
              onAddBlock={() => this.handleAddBlock('eduBlock')}
              onDeleteBlock={(id) => this.handleDeleteBlock('eduBlock', id)}
              allBlocks={this.state.eduBlock || ''}
            />
            <Button
              text="Submit"
              type="submit"
              onSubmit={(e) => this.onSubmit(e)}
            />
          </form>
        )}
      </div>
    );
  }
}

export default App;
