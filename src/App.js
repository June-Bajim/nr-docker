import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Docker Full Stack App</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
