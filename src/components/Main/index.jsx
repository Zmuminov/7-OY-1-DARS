import React from "react";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
function Main() {
  return (
    <div className="Main">
      <div className="FirstMainPage">
        <div className="firstMainPageItem">
          <p>Recent Work</p>
          <h3 className="bigtitle">Some of my favorite projects.</h3>
        </div>
        <button className="greenBtn">View All Project</button>
      </div>
      <div></div>
    </div>
  );
}

export default Main;
