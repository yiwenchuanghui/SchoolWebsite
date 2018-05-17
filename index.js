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
app.get('/fee', (req, res) => {
  res.render('pages/fee');
});
app.get('/students-affair', (req, res) => {
  res.render('pages/students-affair');
});
app.get('/course', (req, res) => {
  res.render('pages/course');
});
app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.listen(5555)

console.log('listening on port 5555')