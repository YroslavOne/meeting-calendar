import { Search } from "react-bootstrap-icons";
import "./TopPanel.css";
import { useState } from "react";
import TopPanelSearch from "./TopPanelComponent/TopPanelSearch";
function TopPanel() {
  // console.log(searchValue)

  return (
    <div className="top-panel">
      <TopPanelSearch/>
    </div>
  );
}
export default TopPanel;
