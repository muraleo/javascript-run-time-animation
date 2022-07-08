import React from "react";
import SectionHeader from "../elements/SectionHeader";

const ConsoleSection = ({ consoleData = [], classNames }) => {
  return (
    <div className={`box-section console-section ${classNames}`}>
      <SectionHeader header={"Console"} />

      <div className="section-content-height-full bg-white p-2 rounded">
        {consoleData.map((data, idx) => {
          return (
            <div key={`call-stack-${idx}`}>
              <span className="text-blue-500">&#62;</span> {data}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConsoleSection;
