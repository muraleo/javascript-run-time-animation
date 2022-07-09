import React from "react";
import MainContainer from "../components/MainContainer";
import { sourceCodeData } from "../data/microtaskQueue/sourceCode";
import { microtaskQueueViewSteps } from "../data/microtaskQueue/microtaskQueueViewSteps";

const MicroTaskQueue = () => {
  return (
    <div>
      <MainContainer
      hideBrowser
        sourceCodeData={sourceCodeData}
        viewSteps={microtaskQueueViewSteps}
      />
    </div>
  );
};

export default MicroTaskQueue;
