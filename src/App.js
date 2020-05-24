import React, { useState, useRef, useEffect } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router";
import HomePage from "./HomePage";
import NavBar from "./HeaderComponent/NavBar";

import TestComponent from "./TestComponent";
import Counter from "./NewComponent";
import Counters from "./Counters";
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

  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
        </div>
      </Router>
      <TestComponent passData={data} />
      <input ref={dataNameRef} type="text" defaultValue="Enter Name" />
      <button onClick={handleChangeName}>Submit Name</button>
    </>
  );
}

export default App;
