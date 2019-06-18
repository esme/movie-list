import App from './components/App.js';
import getMovieData from './lib/getMovieData';

ReactDOM.render(<App getMovieData={getMovieData}/>, document.getElementById('app'));