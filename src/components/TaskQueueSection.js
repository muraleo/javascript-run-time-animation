import React from "react";
import SectionHeader from "../elements/SectionHeader";
import SectionCard from "../elements/SectionCard";

const TaskQueueSection = ({taskQueueData = []}) => {
  return (
    <div className="box-section task-queue-section">
      <SectionHeader header="Task Queue" />
      
      <div className="section-content-height-full">
        {taskQueueData.map((data, idx) => {
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

export default TaskQueueSection;
