import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, useState } from "react";
import ComponentOne from "./components/ComponentOne"; //nornal import
const ComponentTwo = React.lazy(() => import("./components/ComponentTwo")); //lazy import
function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="App">
      <ComponentOne />
      {isShow && (
        <Suspense fallback={<h1>Loading......</h1>}>
          <ComponentTwo />
        </Suspense>
      )}
      <button
        onClick={() => {
          setIsShow(true);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default App;
