import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <h1 className="page-header">
        Corroborate&nbsp;
        <small>
          <a href="https://github.com/aren55555/corroborate">
            JSON API
          </a>
          &nbsp;Validator
        </small>
        <div className="pull-right">
          <a className="btn btn-default" href="https://github.com/aren55555/corroborate">
            Source Code
          </a>
        </div>
      </h1>
    );
  }
}

export default Header;
