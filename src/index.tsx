import React from "react";
import { render } from "react-dom";

import Search from "../src/components/Search";
import Cities from "../src/components/Cities";

import "./style.css";

const App = () => {
  return (
    <main>
      <Search />
      <Cities />
    </main>
  );
};

render(<App />, document.getElementById("root"));
