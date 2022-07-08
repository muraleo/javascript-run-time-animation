import React from 'react';
import MainContainer from '../components/MainContainer';

const CallStack = () => {
    return (
        <div>
            <MainContainer hideWebAPIs hideTaskQueue hideMicrotaskQueue/>
        </div>
    );
};

export default CallStack;
