import React, { Component } from 'react';
import uniqid from 'uniqid';

import helpers from '../helpers.js';

import InputField from './InputField.js';
import Button from './Button.js';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blocks: [{ id: uniqid() }],
    };

    this.onDelete = helpers.onDelete.bind(this);
    this.onAdd = helpers.onAdd.bind(this);
  }

  render() {
    let sections = [];
    const { blocks } = this.state;
    for (let i = 0; i < blocks.length; i++) {
      const id = blocks[i].id;
      const section = (
        <div key={id}>
          <InputField className="position-input" label="Position" type="text" />
          <InputField className="company-input" label="Company" type="text" />
          <InputField className=" city-input" label="City" type="text" />
          <InputField className="from-input" label="From" type="text" />
          <InputField className="to-input" label="To" type="text" />
          <InputField
            className="job-details-input"
            label="Details"
            type="text"
          />
          <Button text="Delete" clickEvent={() => this.onDelete(id)} />
        </div>
      );

      sections.push(section);
    }

    return (
      <section>
        {sections}
        <Button text="Add" clickEvent={this.onAdd} />
      </section>
    );
  }
}

export default Education;
