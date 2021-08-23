import React from 'react';

import InputField from './InputField.js';
import Button from './Button.js';

const Experience = (props) => {
  const { allBlocks } = props;

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
                onChange={(e) => props.onPosChange(e, id)}
                value={allBlocks[id].position || ''}
              />
              <InputField
                input={true}
                className="company-input"
                label="Company"
                name={`${id}-company`}
                type="text"
                onChange={(e) => props.onCompChange(e, id)}
                value={allBlocks[id].company || ''}
              />
              <InputField
                input={true}
                className=" city-input"
                label="City"
                name={`${id}-city`}
                type="text"
                onChange={(e) => props.onCityChange(e, id)}
                value={allBlocks[id].city || ''}
              />
              <InputField
                input={true}
                className="from-input"
                label="From"
                name={`${id}-from`}
                type="text"
                onChange={(e) => props.onFromChange(e, id)}
                value={allBlocks[id].from || ''}
              />
              <InputField
                input={true}
                className="to-input"
                label="To"
                name={`${id}-to`}
                type="text"
                onChange={(e) => props.onToChange(e, id)}
                value={allBlocks[id].to || ''}
              />
              <InputField
                input={false}
                className="job-details-input"
                placeholder="lines will be converted to bullet points"
                label="Details"
                onChange={(e) => props.onDeetsChange(e, id)}
                value={allBlocks[id].details || ''}
              />

              <Button
                text="Delete"
                className="del-btn"
                clickEvent={() => {
                  props.onDeleteBlock(id);
                }}
              />
            </div>
          );
        })}
      <Button text="Add" clickEvent={props.onAddBlock} />
    </section>
  );
};

export default Experience;
