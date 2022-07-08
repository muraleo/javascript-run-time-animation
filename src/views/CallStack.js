import React from 'react';
import MainContainer from '../components/MainContainer';
import { sourceCodeData } from '../data/callStack/sourceCode';
import { callStackViewSteps } from '../data/callStack/callStackViewSteps';

const CallStack = () => {
	return (
		<div>
			<MainContainer hideWebAPIs hideTaskQueue hideMicrotaskQueue sourceCodeData={sourceCodeData} viewSteps={callStackViewSteps}/>
		</div>
	);
};

export default CallStack;
