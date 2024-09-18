import React from "react";
import { Link } from "react-router-dom";
import MiniBrowser from "../MiniBrowser";

function Home() {
  return (
    <div>
      <div className="App">
        <MiniBrowser
          repoUrl="https://github.com/tshao42/mytshao42.github.io"
          initialPage="index.html"
        />
      </div>
      <ul>
        <li>
          <Link to="/3demo">Three.js Demo</Link>
        </li>
        <li>
          <Link to="/overview">Overview</Link>
        </li>
        <li>
          <Link to="/curatedplaces">Curated Places</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
