import { useMemo, useState } from 'react';
import './App.css'
import Router from './components/Router';
import UserContext from './contexts/UserContext';
import { HelmetProvider } from "react-helmet-async";


function App() {
  const [user, setUser] = useState(null);

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <HelmetProvider>
        <UserContext.Provider value={providerUser}>
          <Router />
        </UserContext.Provider>
      </HelmetProvider>
    </div>
  );
}

export default App
