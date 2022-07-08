import React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
		<Box sx={{ width: '100%' }} className="main-container">
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={4}>
					<Button variant="contained" size="large" style={{marginLeft: "20px", marginTop: "5px"}}>
						<Link to={getPath()}>HOME</Link>
					</Button>
					<SourceCodeSection />
					<ConsoleSection />
				</Grid>
				<Grid item xs={8}>
					<div className="box-section jre-container">
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
						<div className="width-full flex justify-end">
							<IconButton aria-label="left">
								<ChevronLeftIcon />
							</IconButton>
							<IconButton aria-label="right">
								<ChevronRightIcon />
							</IconButton>
						</div>
					</div>
				</Grid>
			</Grid>
		</Box>
	);
};

export default MainContainer;
