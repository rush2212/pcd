import React, { useEffect } from "react";
import tagCanvas from "tag-canvas";
import { Chip } from "@mui/material";
import "./cloud.css"
const Cloud = () => {
  useEffect(() => {
    const renderTagCloud = () => {
      try {
        tagCanvas.Start("myCanvas", "tags", {
            textColour: "#08fdd8",
            outlineColour: "#ff00ff",
                      reverse: true,
          depth: 0.8,
          maxSpeed: 0.06,
        });
      } catch (e) {
        // something went wrong, hide the canvas container
        document.getElementById("myCanvasContainer").style.display = "none";
      }
    };

    renderTagCloud();

    // Clean-up code (if needed)
    return () => {
      // Cleanup logic can go here
    };
  }, []);

  return (
    <div className="cloud-container" style={{backgroundColor:"black"}}>
      <h1 style={{color:"white",margin:"2px"}} >Tech stack</h1>
      <div id="myCanvasContainer">
        <canvas width="600" height="600" id="myCanvas">
          <p>
            Anything in here will be replaced on browsers that do not support
            the canvas element
          </p>
        </canvas>
      </div>
      <div id="tags" className="tag-chip-container">
        {" "}
        <ul>
          <li>
            <Chip label="Python" className="tag-chip" />
          </li>
          <li>
            <a href="/">JavaScript</a>
          </li>
          <li>
            <a href="/">Java</a>
          </li>
          <li>
            <a href="/">C++</a>
          </li>
          <li>
            <a href="/">Ruby</a>
          </li>
          <li>
            <a href="/">Swift</a>
          </li>
          <li>
            <a href="/">PHP</a>
          </li>
          <li>
            <a href="/">TypeScript</a>
          </li>
          <li>
            <a href="/">Go</a>
          </li>
          <li>
            <a href="/">Rust</a>
          </li>
          <li>
            <a href="/">Kotlin</a>
          </li>
          <li>
            <a href="/">HTML</a>
          </li>
          <li>
            <a href="/">CSS</a>
          </li>
          <li>
            <a href="/">C#</a>
          </li>
          <li>
            <a href="/">Objective-C</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cloud;
