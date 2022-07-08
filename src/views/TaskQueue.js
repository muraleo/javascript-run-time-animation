import React from 'react';
import MainContainer from '../components/MainContainer';
import { sourceCodeData } from '../data/taskQueue/sourceCode';
import { taskQueueViewSteps } from '../data/taskQueue/taskQueueViewSteps';

const TaskQueue = () => {
    return (
        <div>
             <MainContainer hideMicrotaskQueue sourceCodeData={sourceCodeData} viewSteps={taskQueueViewSteps}/>
        </div>
    );
};

export default TaskQueue;