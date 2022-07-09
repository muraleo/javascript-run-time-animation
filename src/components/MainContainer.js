import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import SourceCodeSection from "./SourceCodeSection";
import ConsoleSection from "./ConsoleSection";
import CallStackSection from "./CallStackSection";
import WebAPIsSection from "./WebAPIsSection";
import TaskQueueSection from "./TaskQueueSection";
import MicrotaskQueueSection from "./MicrotaskQueueSection";
import BrowserSection from "./BrowserSection";

import circularIcon from "../circular-icon.png";

import { getPath } from "../utils";

const MainContainer = ({
  hideWebAPIs,
  hideTaskQueue,
  hideMicrotaskQueue,
  hideCircularIcon,
  hideBrowser,
  sourceCodeData,
  viewSteps = [],
  onClickHandler
}) => {
  const maxStep = viewSteps.length;
  const [step, setStep] = useState(0);

  const runCircularIconAnime = () => {
    if (!hideCircularIcon) {
      const circularIconElement = document.getElementById("circular-icon");
      circularIconElement.classList.add("running");
      setTimeout(() => {
        circularIconElement.classList.remove("running");
      }, 1000);
    }
  };

  const onPrevHandler = () => {
    if (step >= 1) {
      setStep(step - 1);
    }
  };

  const onNextHandler = () => {
    if (step + 1 < maxStep) {
      setStep(step + 1);
    }
  };

  return (
    <div className="main-container">
      <div className="nav flex justify-between">
        <Link to={getPath()}>HOME</Link>
        <div className="mr-16 text-white">
          Step: <span>{step + 1}</span>
          <span>{step === maxStep - 1 ? " (Finished!)" : ""}</span>
        </div>
      </div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <SourceCodeSection
              sourceCodeData={sourceCodeData}
              sourceCodeSteps={viewSteps[step].sourceCodeSteps}
            />
            <ConsoleSection
              consoleData={viewSteps[step].consoleSteps}
              classNames={hideBrowser ? "" : "half-height"}
            />
            {!hideBrowser && <BrowserSection onClickHandler={onClickHandler}/>}
          </Grid>
          <Grid item xs={8}>
            <div className="jre-container">
              <div className="flex">
                <CallStackSection
                  callStackData={viewSteps[step].callStackSteps}
                />
                {!hideWebAPIs && <WebAPIsSection webApisData={viewSteps[step].webApisSteps}/>}
              </div>
              {!hideCircularIcon && (
                <img
                  src={circularIcon}
                  id="circular-icon"
                  alt="circular-icon"
                />
              )}
              <Grid item xs={12}>
                {!hideTaskQueue && <TaskQueueSection taskQueueData={viewSteps[step].taskQueueSteps}/>}
              </Grid>
              <Grid item xs={12}>
                {!hideMicrotaskQueue && <MicrotaskQueueSection microtaskQueueData={viewSteps[step].microtaskQueueSteps}/>}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Box>
      <div className="step-buttons width-full flex justify-between">
        <div style={{ marginRight: "20.3%" }}>
          <Button
            className="mr-4"
            variant="contained"
            size="large"
            onClick={onPrevHandler}
          >
            PREV
          </Button>
          <Button variant="contained" size="large" onClick={onNextHandler}>
            NEXT
          </Button>
        </div>
        <div className="mt-2">
          Inspired by <a className="text-orange-500" target="_blank" href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D">Loupe </a> 
          and <a className="text-orange-500" target="_blank" href="https://www.jsv9000.app/?code=ZnVuY3Rpb24gYSgpe30KCnNldFRpbWVvdXQoZnVuY3Rpb24gYigpIHt9LCAwKTsKClByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gYygpIHt9KTsKCmEoKTs%3D">jsv9000</a>.
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
