import React, { useState } from 'react';
import Personal from './components/Personal.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import Button from './components/Button.js';
import Resume from './components/Resume.js';

import uniqid from 'uniqid';

import './globalStyles.css';

const App = () => {
  const form = React.createRef();

  const [formData, setFormData] = useState({});
  function handleChange(key, val) {
    setFormData({ ...formData, [key]: val });
  }
  function handleBlockChange(type, blockID, key, val) {
    setFormData({
      ...formData,
      [type]: {
        ...formData[type],
        [blockID]: { ...formData[type][blockID], [key]: val },
      },
    });
  }
  function handleAddBlock(type) {
    const blockID = uniqid();

    setFormData({ ...formData, [type]: { ...formData[type], [blockID]: {} } });
  }
  function handleDeleteBlock(type, id) {
    const copy = { ...formData[type] };
    delete copy[id];
    setFormData({ ...formData, [type]: copy });
  }

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [doDisplayErrors, setDoDisplayErrors] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    if (!form.current.reportValidity()) return setDoDisplayErrors(true);

    setIsSubmitted(true);
  }

  return (
    <div id="resume">
      {isSubmitted === true && (
        <div>
          <Button
            type="button"
            text="Edit"
            clickEvent={() => setIsSubmitted(false)}
          />
          <Resume
            name={formData.name}
            address={formData.address}
            phone={formData.phone}
            email={formData.email}
            expBlock={formData.expBlock}
            eduBlock={formData.eduBlock}
          />
        </div>
      )}
      {isSubmitted === false && (
        <form
          ref={form}
          onSubmit={onSubmit}
          className={doDisplayErrors ? 'display-errors' : ''}
          noValidate
        >
          <Personal
            onNameChange={(e) => handleChange('name', e)}
            onAddressChange={(e) => handleChange('address', e)}
            onPhoneChange={(e) => handleChange('phone', e)}
            onEmailChange={(e) => handleChange('email', e)}
            nameVal={formData.name}
            addressVal={formData.address}
            phoneVal={formData.phone}
            emailVal={formData.email}
          />
          <Experience
            onPosChange={(e, id) =>
              handleBlockChange('expBlock', id, 'position', e)
            }
            onCompChange={(e, id) =>
              handleBlockChange('expBlock', id, 'company', e)
            }
            onCityChange={(e, id) =>
              handleBlockChange('expBlock', id, 'city', e)
            }
            onFromChange={(e, id) =>
              handleBlockChange('expBlock', id, 'from', e)
            }
            onToChange={(e, id) => handleBlockChange('expBlock', id, 'to', e)}
            onDeetsChange={(e, id) =>
              handleBlockChange('expBlock', id, 'details', e)
            }
            onAddBlock={() => handleAddBlock('expBlock')}
            onDeleteBlock={(id) => handleDeleteBlock('expBlock', id)}
            allBlocks={formData.expBlock || ''}
          />
          <Education
            onSchoolChange={(e, id) =>
              handleBlockChange('eduBlock', id, 'school', e)
            }
            onCityChange={(e, id) =>
              handleBlockChange('eduBlock', id, 'city', e)
            }
            onDegreeChange={(e, id) =>
              handleBlockChange('eduBlock', id, 'degree', e)
            }
            onFromChange={(e, id) =>
              handleBlockChange('eduBlock', id, 'from', e)
            }
            onToChange={(e, id) => handleBlockChange('eduBlock', id, 'to', e)}
            onAddBlock={() => handleAddBlock('eduBlock')}
            onDeleteBlock={(id) => handleDeleteBlock('eduBlock', id)}
            allBlocks={formData.eduBlock || ''}
          />
          <Button text="Submit" type="submit" onSubmit={(e) => onSubmit(e)} />
        </form>
      )}
    </div>
  );
};

export default App;
