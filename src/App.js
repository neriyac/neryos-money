import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

// pages
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';

//styles
import './App.css'


function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path={'/'}>
              {!user && <Redirect to={'/Login'}/> }
              {user && <Home />}
            </Route>
            <Route path={'/Login'}>
              {user && <Redirect to={'/'}/>}
              {!user && <Login/>}
            </Route>
            <Route path={'/Signup'}>
              {user && <Redirect to={'/'}/>}
              {!user && <Signup/>}
            </Route>
          </Switch>  
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
