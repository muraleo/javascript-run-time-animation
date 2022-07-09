import React from "react";
import SectionHeader from "../elements/SectionHeader";
import SectionCard from "../elements/SectionCard";

const MicrotaskQueueSection = ({microtaskQueueData}) => {
  return (
    <div className="box-section microtask-queue-section">
      <SectionHeader header="Microtask Queue" />

      <div className="section-content-height-full">
        {microtaskQueueData.map((data, idx) => {
          return (
            <div key={`task-queue-${idx}`}>
              <SectionCard content={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MicrotaskQueueSection;
