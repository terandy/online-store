import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState();
  const apiCall = async () => {
    const res = await fetch("/test");
    const body = await res.json();
    setValue(body.test);
  };
  return (
    <div>
      <h1>Hello World</h1> <button onClick={apiCall}>click</button>{" "}
      <div>Api call response:{value}</div>
    </div>
  );
};

export default App;
