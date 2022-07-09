export const sourceCodeData = `function a(){
    console.log('a')
}

setTimeout(function b() {
    console.log('b')
}, 0);

Promise.resolve().then(function c() {
    console.log('c')
});

a();`;
