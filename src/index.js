import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import CallStack from "./views/CallStack";
import MicroTaskQueue from "./views/MicroTaskQueue";
import TaskQueue from "./views/TaskQueue";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="javascript-run-time-animation/" element={<App />} />
        <Route path="javascript-run-time-animation/callstack" element={<CallStack />} />
        <Route path="javascript-run-time-animation/microtaskqueue" element={<MicroTaskQueue />} />
        <Route path="javascript-run-time-animation/taskqueue" element={<TaskQueue />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
