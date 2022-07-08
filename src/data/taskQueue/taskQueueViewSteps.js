const onClickSnippet = `$.on('button', 'click', function onClick() {
  setTimeout(function timer() {
      console.log('You clicked the button!');    
  }, 2000);
});`;

export const taskQueueViewSteps = [
  {
    sourceCodeSteps: [0,1,2,3,4],
    callStackSteps: [onClickSnippet],
    consoleSteps: [],
    taskQueueSteps: [],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: [],
    taskQueueSteps: [],
    webApisSteps: [{
      content: onClickSnippet
    }],
  },
  {
    sourceCodeSteps: [6],
    callStackSteps: ['console.log("Hi!");'],
    consoleSteps: [],
    taskQueueSteps: [],
    webApisSteps: [{
      content: onClickSnippet
    }],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: ["Hi!"],
    taskQueueSteps: [],
    webApisSteps: [{
      content: onClickSnippet
    }],
  },
  {
    sourceCodeSteps: [8, 9, 10],
    callStackSteps: [`setTimeout(function timeout() {
      console.log("Click the button!");
}, 5000);`],
    consoleSteps: ["Hi!"],
    taskQueueSteps: [],
    webApisSteps: [{
      content: onClickSnippet
    }],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: ["Hi!"],
    taskQueueSteps: [],
    webApisSteps: [{
      content: onClickSnippet
    }, {
      content: "timeout()",
      countDownTime: 5
    }],
  },
  {
    sourceCodeSteps: [12],
    callStackSteps: ['console.log("Welcome!");'],
    consoleSteps: ["Hi!"],
    taskQueueSteps: [],
    webApisSteps: [{
      content: onClickSnippet
    }, {
      content: "timeout()",
      countDownTime: 5
    }],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: ["Hi!", "Welcome!"],
    taskQueueSteps: [],
    webApisSteps: [{
      content: onClickSnippet
    }, {
      content: "timeout()",
      countDownTime: 5
    }],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: ["Hi!", "Welcome!"],
    taskQueueSteps: ["timeout()"],
    webApisSteps: [{
      content: onClickSnippet
    }],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: ["timeout()"],
    consoleSteps: ["Hi!", "Welcome!"],
    taskQueueSteps: [],
    webApisSteps: [{
      content: onClickSnippet
    }],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: ["timeout()", 'console.log("Click the button!");'],
    consoleSteps: ["Hi!", "Welcome!"],
    taskQueueSteps: [],
    webApisSteps: [{
      content: onClickSnippet
    }],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: ["timeout()"],
    consoleSteps: ["Hi!", "Welcome!", "Click the button!"],
    taskQueueSteps: [],
    webApisSteps: [{
      content: onClickSnippet
    }],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: ["Hi!", "Welcome!", "Click the button!"],
    taskQueueSteps: [],
    webApisSteps: [{
      content: onClickSnippet
    }],
  }
];
