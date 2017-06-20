import React, { Component } from 'react';

class Results extends Component {
  render() {
    var hasResults = this.props.valid !== null;

    if (hasResults) {
      var resultLabel;
      if (this.props.valid) {
        resultLabel = <span className="label label-success">Valid</span>;
      } else {
        resultLabel = <span className="label label-danger">Invalid</span>
      }
      var heading = (
        <h3>
          {resultLabel}
        </h3>
      )

      // Display the Warnings
      if (this.props.warnings && this.props.warnings.length > 0) {
        var warningsListItems = [];
        for (let w of this.props.warnings) {
          warningsListItems.push(<li>{w}</li>);
        }

        var warningsList = (
          <div className="text-warning">
            <h4>Warnings:</h4>
            <ul>{warningsListItems}</ul>
          </div>
        )
      }

      // Dipslay the Errors
      if (this.props.errors && this.props.errors.length > 0) {
        var errorsListItems = [];
        for (let e of this.props.errors) {
          errorsListItems.push(<li>{e}</li>);
        }

        var errorsList = (
          <div className="text-danger">
            <h4>Errors:</h4>
            <ul>{errorsListItems}</ul>
          </div>
        )
      }
    }


    return (
      <div id="result">
        {heading}
        {warningsList}
        {errorsList}
      </div>
    )
  }
}

export default Results;
