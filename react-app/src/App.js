import './assets/styles/app.scss';
import { useState, useEffect } from 'react'
import Listing from './components/Listing';
import Login from './components/Login';
import { ListingContextProvider } from './contexts/Listing';
const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <ListingContextProvider>
      <div className="App">
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Listing onLogout={logoutHandler} />}
      </div>
    </ListingContextProvider>
  );
}

export default App;
