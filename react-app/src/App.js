import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './assets/styles/app.scss';

import Listing from './components/Listing';

import WelcomePage from './pages/Welcome'

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/movies" element={<Listing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
