import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };
  const [darkMode, setdarkMode] = useState(getMode);
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark_mode" : ""}>
      <div className="nav">
        <label className="switch">
          <input checked={darkMode} type="checkbox" onChange={() => setdarkMode(!darkMode)} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="content">
        <h1>{darkMode ? "Dark mode is on" : "Light Mode"}</h1>
        <p style={{ fontSize: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          temporibus ea dolores iusto a exercitationem accusamus adipisci
          deserunt perspiciatis repellat?
        </p>
      </div>
    </div>
  );
};

export default DarkMode;
