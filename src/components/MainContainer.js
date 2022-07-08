import React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import SourceCodeSection from './SourceCodeSection';
import ConsoleSection from './ConsoleSection';
import CallStackSection from './CallStackSection';
import WebAPIsSection from './WebAPIsSection';
import TaskQueueSection from './TaskQueueSection';
import MicrotaskQueueSection from './MicrotaskQueueSection';

import { getPath } from '../utils';

const MainContainer = () => {
	return (
		<div className="main-container">
			<div className="nav">
				<Link to={getPath()}>HOME</Link>
			</div>
			<Box sx={{ width: '100%' }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={4}>
						<SourceCodeSection />
						<ConsoleSection />
					</Grid>
					<Grid item xs={8}>
						<div className="jre-container">
							<div className="flex">
								<CallStackSection />
								<WebAPIsSection />
							</div>
							<Grid item xs={12}>
								<TaskQueueSection />
							</Grid>
							<Grid item xs={12}>
								<MicrotaskQueueSection />
							</Grid>
						</div>
					</Grid>
				</Grid>
			</Box>
			<div className="step-buttons width-full flex justify-end">
				<Button className="mr-4" variant="contained" size="large">PREV</Button>
				<Button variant="contained" size="large">NEXT</Button>
			</div>
		</div>
	);
};

export default MainContainer;
