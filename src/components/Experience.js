import React, { Component } from 'react';

import helpers from '../helpers.js';

import InputField from './InputField.js';
import Button from './Button.js';

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
        <h2>Experience</h2>
        {blocks.map((block) => {
          const id = block.id;
          return (
            <div key={id}>
              <InputField
                input={true}
                className="position-input"
                label="Position"
                name={`${id}-position`}
                type="text"
                onChange={(e) => this.props.onPosChange(e, id)}
              />
              <InputField
                input={true}
                className="company-input"
                label="Company"
                name={`${id}-company`}
                type="text"
                onChange={(e) => this.props.onCompChange(e, id)}
              />
              <InputField
                input={true}
                className=" city-input"
                label="City"
                name={`${id}-city`}
                type="text"
                onChange={(e) => this.props.onCityChange(e, id)}
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
              <InputField
                input={false}
                className="job-details-input"
                placeholder="lines will be converted to bullet points"
                label="Details"
                onChange={(e) => this.props.onDeetsChange(e, id)}
              />

              <Button
                text="Delete"
                className="del-btn"
                clickEvent={() => {
                  this.props.onDeleteBlock(id);
                  this.onDelete(id);
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
