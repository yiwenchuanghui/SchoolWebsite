const express = require('express');
const app = express();
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
// blog home page
app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/application', (req, res) => {
  res.render('pages/application');
});
app.get('/admissions', (req, res) => {
  res.render('pages/admissions');
});
app.get('/course', (req, res) => {
  res.render('pages/course');
});

app.listen(5555)

console.log('listening on port 5555')