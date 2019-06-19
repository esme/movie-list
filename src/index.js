import App from './components/App.js';
import getMovieData from './data/config.js';

ReactDOM.render(<App getMovieData={getMovieData}/>, document.getElementById('app'));