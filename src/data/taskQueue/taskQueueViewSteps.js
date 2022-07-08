export const taskQueueViewSteps = [
    {
        sourceCodeSteps: [0],
        callStackSteps: ['console.log("hello world!");'],
        consoleSteps: [],
        taskQueueSteps: [],
        webApisSteps: []
    },
    {
        sourceCodeSteps: [10],
        callStackSteps: ['greeting();'],
        consoleSteps: ['hello world!'],
        taskQueueSteps: [],
        webApisSteps: []
    },
    {
        sourceCodeSteps: [10, 3],
        callStackSteps: ['greeting();', 'sayHi();'],
        consoleSteps: ['hello world!'],
        taskQueueSteps: [],
        webApisSteps: []
    },
    {
        sourceCodeSteps: [10, 3, 6],
        callStackSteps: ['greeting();', 'sayHi();', 'console.log(Hi);'],
        consoleSteps: ['hello world!'],
        taskQueueSteps: [],
        webApisSteps: []
    },
    {
        sourceCodeSteps: [10, 3],
        callStackSteps: ['greeting();', 'sayHi();'],
        consoleSteps: ['hello world!', 'Hi'],
        taskQueueSteps: [],
        webApisSteps: []
    },
    {
        sourceCodeSteps: [10],
        callStackSteps: ['greeting();'],
        consoleSteps: ['hello world!', 'Hi'],
        taskQueueSteps: [],
        webApisSteps: []
    },
    {
        sourceCodeSteps: [],
        callStackSteps: [],
        consoleSteps: ['hello world!', 'Hi'],
        taskQueueSteps: [],
        webApisSteps: []
    },
]