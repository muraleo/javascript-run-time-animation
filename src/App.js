import React from 'react';
import './App.scss';

import CallStack from './views/CallStack';
import MicroTaskQueue from './views/MicroTaskQueue';
import TaskQueue from './views/TaskQueue';

import MainContainer from './components/MainContainer';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { Link } from "react-router-dom";

function App() {
	return (
		<div className="app">
				<Button variant="contained" size="large"><Link to="callstack">Call Stack</Link></Button>
				<Button variant="contained" size="large"><Link to="taskqueue">Task Queue</Link></Button>
				<Button variant="contained" size="large"><Link to="microtaskqueue">Microtask Queue</Link></Button>
		</div>
	);
}

export default App;
