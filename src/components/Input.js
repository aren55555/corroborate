import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div id="input">
        <div className="form-group">
          <textarea
            className="form-control"
            id="json"
            placeholder="Paste JSON API payload here"
            rows="10"
            onChange={this.handleChange}
            value={this.props.payload}
            ></textarea>
        </div>
      </div>
    )
  }
}

export default Input;
