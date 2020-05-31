import React, { Component } from "react";
import Logo from "./Logo";
import SecretFiles from "./pageComponents/SecretFiles";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Logo />
        <SecretFiles />
      </div>
    );
  }
}
export default HomePage;
