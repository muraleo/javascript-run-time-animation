import React, {useState} from "react";
import MainContainer from "../components/MainContainer";
import { sourceCodeData } from "../data/taskQueue/sourceCode";
import { taskQueueViewSteps } from "../data/taskQueue/taskQueueViewSteps";
import { onClickSteps } from "../data/taskQueue/onClickSteps";

const TaskQueue = () => {
  const [viewSteps, setViewSteps] = useState(taskQueueViewSteps);
  const onClickHandler = () => {
    setViewSteps([...taskQueueViewSteps, ...onClickSteps]);
  }
  return (
    <div>
      <MainContainer
        hideMicrotaskQueue
        sourceCodeData={sourceCodeData}
        viewSteps={viewSteps}
        onClickHandler={onClickHandler}
        taskQueueHeader="Callback Queue"
      />
    </div>
  );
};

export default TaskQueue;
