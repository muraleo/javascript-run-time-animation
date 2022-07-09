export const microtaskQueueViewSteps = [
  {
    sourceCodeSteps: [4, 5, 6],
    callStackSteps: [`setTimeout(function b() {
      console.log('b')
}, 0);`],
    consoleSteps: [],
    taskQueueSteps: [],
    microtaskQueueSteps: [],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: [],
    taskQueueSteps: [],
    microtaskQueueSteps: [],
    webApisSteps: [{
      content: `setTimeout(function b() {
        console.log('b')
}, 0);`
    }],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: [],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: [],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [8, 9, 10],
    callStackSteps: [`Promise.resolve().then(function c() {
      console.log('c')
});`],
    consoleSteps: [],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: [],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: [],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: [],
    webApisSteps: [{
      content: `Promise.resolve().then(function c() {
        console.log('c')
});`
    }],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: [],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: ["c()"],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [12],
    callStackSteps: ["a();"],
    consoleSteps: [],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: ["c()"],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [12, 1],
    callStackSteps: ["a();", "console.log('a')"],
    consoleSteps: [],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: ["c()"],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [12],
    callStackSteps: ["a();"],
    consoleSteps: ["a"],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: ["c()"],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: ["a"],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: ["c()"],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: ["c()"],
    consoleSteps: ["a"],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: [],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [9],
    callStackSteps: ["c()", "console.log('c')"],
    consoleSteps: ["a"],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: [],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: ["c()"],
    consoleSteps: ["a", "c"],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: [],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: ["a", "c"],
    taskQueueSteps: ["b()"],
    microtaskQueueSteps: [],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: ["b()"],
    consoleSteps: ["a", "c"],
    taskQueueSteps: [],
    microtaskQueueSteps: [],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [5],
    callStackSteps: ["b()", "console.log('b')"],
    consoleSteps: ["a", "c"],
    taskQueueSteps: [],
    microtaskQueueSteps: [],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: ["b()"],
    consoleSteps: ["a", "c", "b"],
    taskQueueSteps: [],
    microtaskQueueSteps: [],
    webApisSteps: [],
  },
  {
    sourceCodeSteps: [],
    callStackSteps: [],
    consoleSteps: ["a", "c", "b"],
    taskQueueSteps: [],
    microtaskQueueSteps: [],
    webApisSteps: [],
  },
];
