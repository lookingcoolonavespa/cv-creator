import React from 'react';

import InputField from './InputField.js';
import Button from './Button.js';

import './style/Block.css';

const Education = (props) => {
  const { allBlocks } = props;

  return (
    <section>
      <h2>Education</h2>
      {allBlocks &&
        Object.keys(allBlocks).map((blockID) => {
          const id = blockID;
          return (
            <div key={id}>
              <InputField
                input={true}
                className="school-name-input"
                label="School Name"
                name={`${id}-name`}
                type="text"
                onChange={(e) => props.onSchoolChange(e, id)}
                value={allBlocks[id].school || ''}
              />
              <InputField
                input={true}
                className="city-input"
                label="City"
                name={`${id}-city`}
                type="text"
                onChange={(e) => props.onCityChange(e, id)}
                value={allBlocks[id].city || ''}
              />
              <InputField
                input={true}
                className=" degree-input"
                label="Degree"
                name={`${id}-degree`}
                type="text"
                onChange={(e) => props.onDegreeChange(e, id)}
                value={allBlocks[id].degree || ''}
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

export default Education;
