export const callStackViewSteps = [
    {
        sourceCodeSteps: [0],
        callStackSteps: ['console.log("hello world!");'],
        consoleSteps: []
    },
    {
        sourceCodeSteps: [10],
        callStackSteps: ['greeting();'],
        consoleSteps: ['hello world!']
    },
    {
        sourceCodeSteps: [10, 3],
        callStackSteps: ['greeting();', 'sayHi();'],
        consoleSteps: ['hello world!']
    },
    {
        sourceCodeSteps: [10, 3, 6],
        callStackSteps: ['greeting();', 'sayHi();', 'console.log(Hi);'],
        consoleSteps: ['hello world!']
    },
    {
        sourceCodeSteps: [10, 3],
        callStackSteps: ['greeting();', 'sayHi();'],
        consoleSteps: ['hello world!', 'Hi']
    },
    {
        sourceCodeSteps: [10],
        callStackSteps: ['greeting();'],
        consoleSteps: ['hello world!', 'Hi']
    },
    {
        sourceCodeSteps: [],
        callStackSteps: [],
        consoleSteps: ['hello world!', 'Hi']
    },
]