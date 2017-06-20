import React, { Component } from 'react';

import Header from './Header';
import Input from './Input';
import Results from './Results';

class Corroborate extends Component {
  constructor() {
    super();

    this.state = {warnings: [], errors: [], valid: null}

    // This binding is necessary to make `this` work in the callback
    this.onChange = this.onChange.bind(this);
    this.jsonapivalidator = window.jsonapivalidator;
  }

  onChange(text) {
    this.validateJSONAPI(text);
  }

  validateJSONAPI(text) {
    try {
      var obj = JSON.parse(text);
    } catch(e) {
      // TODO: handle the unparsable JSON case
      console.log("Invalid JSON");
      return;
    }

    var result = this.jsonapivalidator(obj);

    this.setState({
      warnings: result.Warnings(),
      errors:   result.Errors(),
      valid:    result.Valid(),
      payload:  JSON.stringify(obj, null, 2),
    })

    return;
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Input
          onChange={this.onChange}
          payload={this.state.payload} />
        <hr/>
        <Results
          warnings={this.state.warnings}
          errors={this.state.errors}
          valid={this.state.valid} />
      </div>
    );
  }
}

export default Corroborate;
