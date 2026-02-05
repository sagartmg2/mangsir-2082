import React, { useState } from "react";

export default function GoogleTabs() {
  //   let currentTab = "images";
  const [currentTab, setCurrentTab] = useState("all");

  const changeToAll = () => {
    // currentTab = "all"; // XX cannot change state variable directly. 
    setCurrentTab("all")
    console.log("changeToAll", currentTab);
  };

  const changeToImages = () => {
    console.log("changeToImages");
    // currentTab = "images";
    setCurrentTab("images")
  };

  const changeToVideos = () => {
    console.log("changeToVideos");
    // currentTab = "videos";
    setCurrentTab("videos")

  };

  console.log("google tabs- rendered..");
  return (
    <div>
      {/* <p>current Tab: {currentTab}</p> */}
      {/* <hr /> */}
      <nav>
        <span onClick={changeToAll} className="active-tab"> All</span>
        <span onClick={changeToImages} className=""> Images</span>
        <span onClick={changeToVideos} className=""> Videos</span>
      </nav>

      {currentTab == "all" ? (
        <div>
          <p>All Contents</p>
          <p>All Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, culpa.</p>
          <p>All Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, culpa.</p>
          <p>All Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, culpa.</p>
        </div>
      ) : (
        ""
      )}

      {currentTab == "images" && (
        <div>
          <p>Images Contents</p>
          <p>Images Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, culpa.</p>
          <p>Images Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, culpa.</p>
          <p>Images Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, culpa.</p>
        </div>
      )}

      {currentTab == "videos" && (
        <div>
          <p>Videos Contents</p>
          <p>Videos Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, culpa.</p>
          <p>Videos Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, culpa.</p>
          <p>Videos Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, culpa.</p>
        </div>
      )}
    </div>
  );
}
