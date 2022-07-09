import React from "react";
import SectionHeader from "../elements/SectionHeader";
import Button from "@mui/material/Button";

const BrowserSection = ({ onClickHandler }) => {
  return (
    <div className="box-section browser-section">
      <SectionHeader header={"Browser"} />

      <div className="section-content-height-full bg-white p-2 rounded">
        <Button variant="contained" onClick={onClickHandler}>Click me!</Button>
      </div>
    </div>
  );
};

export default BrowserSection;
