import React, { Component } from 'react';

const parse = {
  details(str) {
    return str.split('\n').map((line) => <li>{line}</li>);
  },
  phone(num) {
    num = num.replace(/[^\d]/g, '');
    if (num.length === 10)
      return num.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  },
  capitalizeEveryWord(str) {
    return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
      return letter.toUpperCase();
    });
  },
};

class Resume extends Component {
  render() {
    const { name, address, phone, email, expBlock, eduBlock } = this.props;
    return (
      <React.Fragment>
        <div>
          <h2>{parse.capitalizeEveryWord(name)}</h2>
          <p>{parse.capitalizeEveryWord(address)}</p>
          <p>{parse.phone(phone)}</p>
          <p>{email}</p>
        </div>
        {expBlock && (
          <div>
            <h3>Experience</h3>
            {Object.keys(expBlock).map((blockID) => (
              <div key={blockID}>
                <p>{parse.capitalizeEveryWord(expBlock[blockID].position)}</p>
                <p>{expBlock[blockID].company}</p>
                <p>{expBlock[blockID].city}</p>
                <p>
                  {expBlock[blockID].from} - {expBlock[blockID].to}
                </p>
                <ul>{parse.details(expBlock[blockID].details)}</ul>
              </div>
            ))}
          </div>
        )}
        {eduBlock && (
          <div>
            <h3>Education</h3>
            {Object.keys(eduBlock).map((blockID) => (
              <div key={blockID}>
                <p>{eduBlock[blockID].school}</p>
                <p>{eduBlock[blockID].city}</p>
                <p>{eduBlock[blockID].degree}</p>
                <p>
                  {eduBlock[blockID].from} - {eduBlock[blockID].to}
                </p>
              </div>
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Resume;
