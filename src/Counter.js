import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor() {
  //  super();
  // this.handleIncrement.bind(this);
  //}

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 30 }} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Click here for free money
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
