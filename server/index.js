const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const Promise = require('bluebird');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((req, res, next) => {
  console.log(res.cookies)
  Promise.resolve(req.cookies.id)
    .then((id) => {
      // !id exists -> set cookie
      if(!id) {
        console.log('!cookie')
        res.cookie('id', 'blahblahblah');
      } else {
        // attempt load session??
        console.log('cookie exists')
      }
      next()
    })
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send('<p>hello world</p>')
  res.redirect('signup');
});

app.get('/signup', (req, res) => {
  // res.send('<p>hello world</p>')
  res.render('signup');
});

app.post('/signup', (req, res) => {
  console.log('req body', req.body);
  res.status(201).send();
});

app.get('/login', (req, res) => {
  res.render('login');
});

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

app.get('/api/movies', (req, res) => {
  res.send(`
  <div>
  <p>Mean Girls</p>
  <p>Hackers</p>
  <p>The Grey</p>
  <p>Sunshine</p>
  <p>Ex Machina</p>
  </div>
  `)
});

const port = process.env.port || 3000;

app.listen(port, console.log(`listening on port ${port}`));