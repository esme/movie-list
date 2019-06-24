const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send('<p>hello world</p>')
  res.render('signup');
});

var movies = [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }];

app.get('/api/movies', (req, res) => {
  res.send(`
    <div>
      <p>Mean Girls</p>
      <p>Hackers</p>
      <p>The Grey</p>
      <p>Sunshine</p>
      <p>Ex Machina</p>
    </div>
  `);
});

app.listen(port, console.log(`listening on port ${port}`));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInBvcnQiLCJwcm9jZXNzIiwiZW52Iiwic2V0IiwiZ2V0IiwicmVxIiwicmVzIiwicmVuZGVyIiwibW92aWVzIiwidGl0bGUiLCJzZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVUMsUUFBUSxTQUFSLENBQWhCO0FBQ0EsTUFBTUMsTUFBTUYsU0FBWjs7QUFFQSxNQUFNRyxPQUFPQyxRQUFRQyxHQUFSLENBQVlGLElBQVosSUFBb0IsSUFBakM7O0FBRUFELElBQUlJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLEtBQXZCOztBQUVBSixJQUFJSyxHQUFKLENBQVEsR0FBUixFQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCO0FBQ0FBLE1BQUlDLE1BQUosQ0FBVyxRQUFYO0FBQ0QsQ0FIRDs7QUFLQSxJQUFJQyxTQUFTLENBQ1gsRUFBQ0MsT0FBTyxZQUFSLEVBRFcsRUFFWCxFQUFDQSxPQUFPLFNBQVIsRUFGVyxFQUdYLEVBQUNBLE9BQU8sVUFBUixFQUhXLEVBSVgsRUFBQ0EsT0FBTyxVQUFSLEVBSlcsRUFLWCxFQUFDQSxPQUFPLFlBQVIsRUFMVyxDQUFiOztBQVFBVixJQUFJSyxHQUFKLENBQVEsYUFBUixFQUF1QixDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNuQ0EsTUFBSUksSUFBSixDQUFVOzs7Ozs7OztHQUFWO0FBU0QsQ0FWRDs7QUFZQVgsSUFBSVksTUFBSixDQUFXWCxJQUFYLEVBQWlCWSxRQUFRQyxHQUFSLENBQWEscUJBQW9CYixJQUFLLEVBQXRDLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LnBvcnQgfHwgMzAwMDtcblxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XG5cbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcbiAgLy8gcmVzLnNlbmQoJzxwPmhlbGxvIHdvcmxkPC9wPicpXG4gIHJlcy5yZW5kZXIoJ3NpZ251cCcpO1xufSk7XG5cbnZhciBtb3ZpZXMgPSBbXG4gIHt0aXRsZTogJ01lYW4gR2lybHMnfSxcbiAge3RpdGxlOiAnSGFja2Vycyd9LFxuICB7dGl0bGU6ICdUaGUgR3JleSd9LFxuICB7dGl0bGU6ICdTdW5zaGluZSd9LFxuICB7dGl0bGU6ICdFeCBNYWNoaW5hJ30sXG5dO1xuXG5hcHAuZ2V0KCcvYXBpL21vdmllcycsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZChgXG4gICAgPGRpdj5cbiAgICAgIDxwPk1lYW4gR2lybHM8L3A+XG4gICAgICA8cD5IYWNrZXJzPC9wPlxuICAgICAgPHA+VGhlIEdyZXk8L3A+XG4gICAgICA8cD5TdW5zaGluZTwvcD5cbiAgICAgIDxwPkV4IE1hY2hpbmE8L3A+XG4gICAgPC9kaXY+XG4gIGApXG59KTtcblxuYXBwLmxpc3Rlbihwb3J0LCBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApKTsiXX0=