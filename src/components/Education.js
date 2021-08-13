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
          <InputField
            className="school-name-input"
            label="School Name"
            type="text"
            onChange={(e) => this.props.onSchoolChange(e, id)}
          />
          <InputField
            className="city-input"
            label="City"
            type="text"
            onChange={(e) => this.props.onCityChange(e, id)}
          />
          <InputField
            className=" degree-input"
            label="Degree"
            type="text"
            onChange={(e) => this.props.onDegreeChange(e, id)}
          />
          <InputField
            className="Subject-input"
            label="Subject"
            type="text"
            onChange={(e) => this.props.onSubjectChange(e, id)}
          />
          <InputField
            className="from-input"
            label="From"
            type="text"
            onChange={(e) => this.props.onFromChange(e, id)}
          />
          <InputField
            className="to-input"
            label="To"
            type="text"
            onChange={(e) => this.props.onToChange(e, id)}
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
