import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import SourceCodeSection from './SourceCodeSection';
import ConsoleSection from './ConsoleSection';
import CallStackSection from './CallStackSection';
import WebAPIsSection from './WebAPIsSection';
import TaskQueueSection from './TaskQueueSection';
import MicrotaskQueueSection from './MicrotaskQueueSection';

import circularIcon from '../circular-icon.png';

import { getPath } from '../utils';

const MainContainer = ({ hideWebAPIs, hideTaskQueue, hideMicrotaskQueue, sourceCodeData, viewSteps = [] }) => {
	const maxStep = viewSteps.length;
	const [ step, setStep ] = useState(0);

	const runCircularIconAnime = () => {
		const circularIconElement = document.getElementById('circular-icon');
		circularIconElement.classList.add('running');
		setTimeout(() => {
			circularIconElement.classList.remove('running');
		}, 1000);
	};

	const onPrevHandler = () => {
		if (step >= 1) {
			runCircularIconAnime();
			setStep(step - 1);
		}
	};

	const onNextHandler = () => {
		if (step + 1 < maxStep) {
			runCircularIconAnime();
			setStep(step + 1);
		}
	};

	return (
		<div className="main-container">
			<div className="nav flex justify-between">
				<Link to={getPath()}>HOME</Link>
				<div className="mr-16 text-white">
					Step: <span>{step + 1}</span>
					<span>{step === maxStep - 1 ? ' (Finished!)' : ''}</span>
				</div>
			</div>
			<Box sx={{ width: '100%' }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={4}>
						<SourceCodeSection
							sourceCodeData={sourceCodeData}
							sourceCodeSteps={viewSteps[step].sourceCodeSteps}
						/>
						<ConsoleSection consoleData={viewSteps[step].consoleSteps}/>
					</Grid>
					<Grid item xs={8}>
						<div className="jre-container">
							<div className="flex">
								<CallStackSection callStackData={viewSteps[step].callStackSteps}/>
								{!hideWebAPIs && <WebAPIsSection />}
							</div>
							<Grid item xs={12}>
								{!hideTaskQueue && <TaskQueueSection />}
							</Grid>
							<Grid item xs={12}>
								{!hideMicrotaskQueue && <MicrotaskQueueSection />}
							</Grid>
						</div>
					</Grid>
				</Grid>
			</Box>
			<div className="step-buttons width-full flex">
				<div style={{ marginRight: '20.3%' }}>
					<Button className="mr-4" variant="contained" size="large" onClick={onPrevHandler}>
						PREV
					</Button>
					<Button variant="contained" size="large" onClick={onNextHandler}>
						NEXT
					</Button>
				</div>
				<img src={circularIcon} id="circular-icon" alt="circular-icon" />
			</div>
		</div>
	);
};

export default MainContainer;
