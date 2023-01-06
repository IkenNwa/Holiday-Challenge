import { useMemo, useState } from 'react';
import './App.css'
import Router from './components/Router';
import UserContext from './contexts/UserContext';

function App() {
  const [user, setUser] = useState(null);

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <UserContext.Provider value={providerUser}>
      <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App
