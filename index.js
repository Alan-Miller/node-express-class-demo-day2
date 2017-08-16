const   express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        app = express(),
        port = 3000,
        data = require('./data');

app.use(bodyParser.json());

// app.get('/api/newStudent/:id', (req, res) => {
//     if (req.params.id * 1 === 1) {
//         return res.status(200).send('it was one')
//     }
//     res.status(200).send('it was not one');
// })

// app.get('/api/student', (req, res) => {
//     // console.log(req.query.grade)
//     let finalData = data;
//     if (req.query.grade) {
//         finalData = finalData.filter(e => {
//             if (e.grade == +req.query.grade[0] ||
//             e.grade === +req.query.grade[1]) return e;
//         })
//         // return res.status(200).send(finalData);
//     }
//     if (req.query.name) {
//         let finalData = finalData.filter(e => {
//             if (e.name.toLowerCase() === req.query.name.toLowerCase()) {
//                 return e;
//             }
//         })
//     }
//     res.status(200).send(finalData);
// })

app.post('/api/newStudent', (req, res) => {
    data.push(req.body)
    console.log(data)
    res.status(200).end();
})

app.post('/api/admin', (req, res) => {
    let admin = {
        username: 'ironnack',
        password: 'rebonack'
    };
    let { username, password } = req.body;
    console.log(username, password);

    if (username === admin.username && password === admin.password) {
        res.status(200).send('Logging in...')
    }
    else res.status(403).send('Not an admin.')
    // res.end();
})

// app.get('/api/admin/:username/:password', (req, res) => {
//     let admin = {
//         username: 'ironnack',
//         password: 'rebonack'
//     };
//     let { username, password } = req.params;
//     console.log(username, password);

//     if (username === admin.username && password === admin.password) {
//         res.status(200).send('Logging in...')
//     }
//     else res.status(403).redirect('http://google.com')
//     // res.end();
// })

// app.get('/api/student', (req, res) => {
//     if (req.query.grade) {
//         var result = data.filter(e => {
//             if (e.grade == req.query.grade * 1) return e;
//         })
//         return res.status(200).send(result);
//     }
//     else res.status(200).send(data);
// })

// app.get('/api/student/name', (req, res, next) => {
//     if (req.query.name) {
//         var student = data.filter(e => {
//             if (e.name === req.query.name) return e;
//         })
//         return res.status(200).send(student);
//     }
//     else res.status(200).send(data);
// })

app.listen(port, () => {
    console.log('Listening...')
})