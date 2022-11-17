import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';

//styles
import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route path={'/Login'}>
            <Login/>
          </Route>
          <Route path={'/Signup'}>
            <Signup/>
          </Route>
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App
