const {spawn} = require('child_process');

const childPython = spawn('python',['--version']);
//const childPython = spawn('python',['C:\Users\glodo\Desktop\Projects\test-transferjspy\codespace.py']);
//const childPython = spawn('python',['codespace.py','TrySomethingElse']);

childPython.stdout.on('data',(data) => {
    console.log('stdout: ${data}');
});

childPython.stderr.on('data',(data) => {
    console.error('stdout: ${data}');
});

childPython.on('close',(code) => {
    console.log('child process exited with code ${code}');
});