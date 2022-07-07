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

import {getPath} from "./utils";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={getPath("")} element={<App />} />
        <Route path={getPath("callstack")} element={<CallStack />} />
        <Route path={getPath("microtaskqueue")} element={<MicroTaskQueue />} />
        <Route path={getPath("taskqueue")} element={<TaskQueue />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
