import React, { Component } from 'react';

import helpers from '../helpers.js';

import InputField from './InputField.js';
import Button from './Button.js';

import './style/Block.css';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blocks: [],
    };

    this.onDelete = helpers.onDeleteBlock.bind(this);
    this.onAdd = helpers.onAddBlock.bind(this);
  }

  render() {
    const { blocks } = this.state;

    return (
      <section>
        <h2>Education</h2>
        {blocks.map((block) => {
          const id = block.id;
          return (
            <div key={id}>
              <InputField
                input={true}
                className="school-name-input"
                label="School Name"
                name={`${id}-name`}
                type="text"
                onChange={(e) => this.props.onSchoolChange(e, id)}
              />
              <InputField
                input={true}
                className="city-input"
                label="City"
                name={`${id}-city`}
                type="text"
                onChange={(e) => this.props.onCityChange(e, id)}
              />
              <InputField
                input={true}
                className=" degree-input"
                label="Degree"
                name={`${id}-degree`}
                type="text"
                onChange={(e) => this.props.onDegreeChange(e, id)}
              />
              <InputField
                input={true}
                className="from-input"
                label="From"
                name={`${id}-from`}
                type="text"
                onChange={(e) => this.props.onFromChange(e, id)}
              />
              <InputField
                input={true}
                className="to-input"
                label="To"
                name={`${id}-to`}
                type="text"
                onChange={(e) => this.props.onToChange(e, id)}
              />
              <Button
                text="Delete"
                className="del-btn"
                clickEvent={() => {
                  this.onDelete(id);
                  this.props.onDeleteBlock(id);
                }}
              />
            </div>
          );
        })}
        <Button text="Add" clickEvent={this.onAdd} />
      </section>
    );
  }
}

export default Education;
