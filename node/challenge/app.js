const express = require('express')
const app = express()
//const solution = require('./src/solutions/missing-number');
// const solution = require('./src/solutions/sum-of-two-integers');
// const solution = require('./src/solutions/merge-sorted-linked-lists');
// const solution = require('./src/solutions/copy-linked-list');
// const solution = require('./src/solutions/binary-tree'); // *** incomplete ***
// const solution = require('./src/solutions/string-segmentation');
// const solution = require('./src/solutions/reverse-words');
const solution = require('./src/solutions/changes-with-coins');

app.get('/', (req, res) => {
    res.end(solution.run())
})


const server = app.listen(3000, () => { 
    solution.test()
    process.exit()
})

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})