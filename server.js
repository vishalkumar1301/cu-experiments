const express = require('express');
const hbs = require('hbs');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3000;
var app = express();

const publicPath = path.join(__dirname, '/public');
const partialsPath = path.join(__dirname, '/views/partials');

hbs.registerPartials(partialsPath);
app.set('view engine', 'hbs');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render('index.hbs');
});
app.get('/semester5', (req, res) => {
    res.render('semester.hbs', {
        semester: 5
    });
});
app.get('/loadSemesterSubjects', (req, res) => {
    if(req.query.semester) {
        switch(req.query.semester) {
            case 'semester5':
                var filesindir = path.join(__dirname, `/public/files/${req.query.semester}`);
                fs.readdir(filesindir, (err, items) => {
                    res.send(items);
                });
                break;
        }
    }
});
app.get('/loadExperiments', (req, res) => {
    if(req.query.subjectName && req.query.semester) {
        switch(req.query.subjectName) {
            case 'CG':
                var filesindir = path.join(__dirname, `/public/files/${req.query.semester}/${req.query.subjectName}`);
                fs.readdir(filesindir, (err, items) => {
                    res.send(items);
                });
                break;
            case 'DCCN':
                var filesindir = path.join(__dirname, `/public/files/${req.query.semester}/${req.query.subjectName}`);
                fs.readdir(filesindir, (err, items) => {
                    res.send(items);
                });
                break;
            case 'DAA':
                var filesindir = path.join(__dirname, `/public/files/${req.query.semester}/${req.query.subjectName}`);
                fs.readdir(filesindir, (err, items) => {
                    res.send(items);
                });
                break;
            case 'SE':
                var filesindir = path.join(__dirname, `/public/files/${req.query.semester}/${req.query.subjectName}`);
                fs.readdir(filesindir, (err, items) => {
                    res.send(items);
                });
                break;
            case 'ITEXT':
                var filesindir = path.join(__dirname, `/public/files/${req.query.semester}/${req.query.subjectName}`);
                fs.readdir(filesindir, (err, items) => {
                    res.send(items);
                });
                break;
        }
    }
});
app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
