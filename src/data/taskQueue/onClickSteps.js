const onClickSnippet = `$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
  });`;
  
  export const onClickSteps = [
    {
      sourceCodeSteps: [],
      callStackSteps: [],
      consoleSteps: ["Hi!", "Welcome!", "Click the button!"],
      taskQueueSteps: ["[click] onClick()"],
      webApisSteps: [{
        content: onClickSnippet,
        highlight: true
      }],
    },
    {
      sourceCodeSteps: [],
      callStackSteps: ["[click] onClick()"],
      consoleSteps: ["Hi!", "Welcome!", "Click the button!"],
      taskQueueSteps: [],
      webApisSteps: [{
        content: onClickSnippet
      }],
    },
    {
      sourceCodeSteps: [1, 2, 3],
      callStackSteps: ["[click] onClick()", `setTimeout(function timer() {
        console.log('You clicked the button!');    
}, 2000);`],
      consoleSteps: ["Hi!", "Welcome!", "Click the button!"],
      taskQueueSteps: [],
      webApisSteps: [{
        content: onClickSnippet
      }],
    },
    {
        sourceCodeSteps: [],
        callStackSteps: ["[click] onClick()"],
        consoleSteps: ["Hi!", "Welcome!", "Click the button!"],
        taskQueueSteps: [],
        webApisSteps: [{
          content: onClickSnippet
        },{
            content: "timer()",
            countDownTime: 2
        }],
      },
      {
        sourceCodeSteps: [],
        callStackSteps: [],
        consoleSteps: ["Hi!", "Welcome!", "Click the button!"],
        taskQueueSteps: [],
        webApisSteps: [{
          content: onClickSnippet
        },{
            content: "timer()",
            countDownTime: 2
        }],
      },
      {
        sourceCodeSteps: [],
        callStackSteps: [],
        consoleSteps: ["Hi!", "Welcome!", "Click the button!"],
        taskQueueSteps: ["timer()"],
        webApisSteps: [{
          content: onClickSnippet
        }],
      },
      {
        sourceCodeSteps: [],
        callStackSteps: ["timer()"],
        consoleSteps: ["Hi!", "Welcome!", "Click the button!"],
        taskQueueSteps: [],
        webApisSteps: [{
          content: onClickSnippet
        }],
      },
      {
        sourceCodeSteps: [],
        callStackSteps: ["timer()", "console.log('You clicked the button!');"],
        consoleSteps: ["Hi!", "Welcome!", "Click the button!"],
        taskQueueSteps: [],
        webApisSteps: [{
          content: onClickSnippet
        }],
      },
      {
        sourceCodeSteps: [],
        callStackSteps: ["timer()"],
        consoleSteps: ["Hi!", "Welcome!", "Click the button!", 'You clicked the button!'],
        taskQueueSteps: [],
        webApisSteps: [{
          content: onClickSnippet
        }],
      },
      {
        sourceCodeSteps: [],
        callStackSteps: [],
        consoleSteps: ["Hi!", "Welcome!", "Click the button!", 'You clicked the button!'],
        taskQueueSteps: [],
        webApisSteps: [{
          content: onClickSnippet
        }],
      },
  ];
  