import React, { Component } from 'react';

class Resume extends Component {
  render() {
    console.log(this.props);
    const { name, address, phone, email, expBlock, eduBlock } = this.props;
    function parseDetails(str) {
      return str.split('\n').map((line) => <li>{line}</li>);
    }
    function parsePhone(num) {
      return num.match(/[0-9]/g).toString();
    }
    return (
      <React.Fragment>
        <div>
          <h2>{name}</h2>
          <p>{address}</p>
          <p>{parsePhone(phone)}</p>
          <p>{email}</p>
        </div>
        {expBlock && (
          <div>
            <h3>Experience</h3>
            {Object.keys(expBlock).map((block) => (
              <div key={block}>
                <p>{expBlock[block].position}</p>
                <p>{expBlock[block].company}</p>
                <p>{expBlock[block].city}</p>
                <p>
                  {expBlock[block].from} - {expBlock[block].to}
                </p>
                <ul>{parseDetails(expBlock[block].details)}</ul>
              </div>
            ))}
          </div>
        )}
        {eduBlock && (
          <div>
            <h3>Experience</h3>
            {eduBlock.map((block) => (
              <div key={block}>
                <p>{eduBlock[block].school}</p>
                <p>{eduBlock[block].city}</p>
                <p>{eduBlock[block].degree}</p>
                <p>
                  {eduBlock[block].from} - {eduBlock[block].to}
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
