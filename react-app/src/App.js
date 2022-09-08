import './assets/styles/app.scss';

import Listing from './components/Listing';
import Login from './components/Login';

const App = () => {
  return (
    <div className="App">
      <Login></Login>
      <Listing></Listing>
    </div>
  );
}

export default App;
