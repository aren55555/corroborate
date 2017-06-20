import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="page-header">
          Corroborate
          <small>
            JSON API
            Validator
          </small>
          <div className="pull-right">
            <a className="btn btn-default" href="https://github.com/aren55555/corroborate">
              Source Code
            </a>
          </div>
        </h1>
        <div id="input">
          <div className="form-group">
            <textarea className="form-control" id="json" placeholder="Paste JSON API payload here" rows="10"></textarea>
          </div>
          <a className="btn btn-primary" onclick="startValidation()">Validate</a>
        </div>
        <hr/>
        <div id="result">
        </div>
      </div>
    );
  }
}

export default App;
