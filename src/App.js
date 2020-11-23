import React, {useState} from 'react';
import './App.css';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import Index from './components/pages/Index';
// import Login from './components/pages/Login';
// import Register from './components/pages/Register';
// import Profile from './components/pages/Profile';
import PrivateRoutes from './components/private-routes/PrivateRoutes'

function App() { 
  const {role ,setRole} = useState('guest')
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch> */}
      <PrivateRoutes role={role} setRole={setRole}/>
    </div>
  );
}

export default App;
