import React from "react";
import { render } from "react-dom";

import AreaEx from "./examples/AreaEx";
import LineEx from "./examples/LineEx";
import PieEx from "./examples/PieEx";

const App = () => (
  <div>
    <p>chart examples</p>
    <AreaEx />
    <LineEx />
    <PieEx />
  </div>
);

render(<App />, document.getElementById("app"));
