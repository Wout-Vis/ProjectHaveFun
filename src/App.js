import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory, Switch } from "react-router";
import HomePage from "./HomePage";
import SignedOutLinks from "./HeaderComponent/SignedOutLinks";

import Products from "./pageComponents/Products";
import Ceo from "./pageComponents/Ceo";
import Staff from "./pageComponents/Staff";

import TestComponent from "./TestComponent";
import CustomChatbot from "./chatbot/CustomChatbot";

function App() {
  const [data, setData] = useState(["No Name"]);
  const dataNameRef = useRef();

  const LOCAL_STORAGE_KEY = "qs.data";

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedData) setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  function handleChangeName(e) {
    const name = dataNameRef.current.value;
    if (name === "") return;
    setData([name]);
    dataNameRef.current.value = null;
  }
  function botEventHandler() {}

  return (
    <>
      <Router>
        <div>
          <SignedOutLinks />
          <Switch>
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="products" path="/products" component={Products} />
            <Route name="ceo" path="/ceo" component={Ceo} />
            <Route name="staff" path="/staff" component={Staff} />
          </Switch>
        </div>
      </Router>
      <CustomChatbot eventHandler={botEventHandler} />
    </>
  );
}

export default App;
