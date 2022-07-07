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
        <Route path="/" element={<App />} />
        <Route path="callstack" element={<CallStack />} />
        <Route path="microtaskqueue" element={<MicroTaskQueue />} />
        <Route path="taskqueue" element={<TaskQueue />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
