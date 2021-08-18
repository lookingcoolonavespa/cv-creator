import React, { Component } from 'react';

import InputField from './InputField.js';
import Button from './Button.js';

class Education extends Component {
  render() {
    const { allBlocks } = this.props;

    return (
      <section>
        <h2>Experience</h2>
        {allBlocks &&
          Object.keys(allBlocks).map((blockID) => {
            const id = blockID;
            return (
              <div key={id}>
                <InputField
                  input={true}
                  className="position-input"
                  label="Position"
                  name={`${id}-position`}
                  type="text"
                  onChange={(e) => this.props.onPosChange(e, id)}
                  value={allBlocks[id].position || ''}
                />
                <InputField
                  input={true}
                  className="company-input"
                  label="Company"
                  name={`${id}-company`}
                  type="text"
                  onChange={(e) => this.props.onCompChange(e, id)}
                  value={allBlocks[id].company || ''}
                />
                <InputField
                  input={true}
                  className=" city-input"
                  label="City"
                  name={`${id}-city`}
                  type="text"
                  onChange={(e) => this.props.onCityChange(e, id)}
                  value={allBlocks[id].city || ''}
                />
                <InputField
                  input={true}
                  className="from-input"
                  label="From"
                  name={`${id}-from`}
                  type="text"
                  onChange={(e) => this.props.onFromChange(e, id)}
                  value={allBlocks[id].from || ''}
                />
                <InputField
                  input={true}
                  className="to-input"
                  label="To"
                  name={`${id}-to`}
                  type="text"
                  onChange={(e) => this.props.onToChange(e, id)}
                  value={allBlocks[id].to || ''}
                />
                <InputField
                  input={false}
                  className="job-details-input"
                  placeholder="lines will be converted to bullet points"
                  label="Details"
                  onChange={(e) => this.props.onDeetsChange(e, id)}
                  value={allBlocks[id].details || ''}
                />

                <Button
                  text="Delete"
                  className="del-btn"
                  clickEvent={() => {
                    this.props.onDeleteBlock(id);
                  }}
                />
              </div>
            );
          })}
        <Button text="Add" clickEvent={this.props.onAddBlock} />
      </section>
    );
  }
}

export default Education;
