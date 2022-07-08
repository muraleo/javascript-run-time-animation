import React from "react";
import SectionHeader from "../elements/SectionHeader";
import SectionCard from "../elements/SectionCard";

const CallStackSection = ({ callStackData = [] }) => {
  return (
    <div className="box-section call-stack-section w-2/4">
      <SectionHeader header={"Call Stack"} />

      <div className="call-stack-column-reverse section-content-height-full">
        {callStackData.map((data, idx) => {
          return (
            <div key={`call-stack-${idx}`}>
              <SectionCard content={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CallStackSection;
