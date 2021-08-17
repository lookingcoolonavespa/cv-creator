import React, { Component } from 'react';

class Resume extends Component {
  render() {
    console.log(this.props);
    const { name, address, phone, email, expBlock, eduBlock } = this.props;
    return (
      <React.Fragment>
        <div>
          <h2>{name}</h2>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
        {expBlock && (
          <div>
            <h3>Experience</h3>
            {Object.keys(expBlock).map((block) => (
              <div>
                <p>{expBlock[block].position}</p>
                <p>{expBlock[block].company}</p>
                <p>{expBlock[block].city}</p>
                <p>
                  {expBlock[block].from} - {expBlock[block].to}
                </p>
                <p>{expBlock[block].details}</p>
              </div>
            ))}
          </div>
        )}
        {eduBlock && (
          <div>
            <h3>Experience</h3>
            {eduBlock.map((block) => (
              <div>
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
