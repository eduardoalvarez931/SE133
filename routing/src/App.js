import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Calendar from './Calendar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    //put all your components in here
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
           {/*hits only one of these pages, not all with a switch from top to botom*/}
          {/* but using exact, the path must be exact to show the component */}
          <Route  path="/" exact component ={Home} />
          <Route path="/about" component ={About} />
          <Route path="/shop" component ={Shop} />
          <Route path="/calendar" component ={Calendar} />
        </Switch>
        

      </div>
    </Router>
    
  );
}

//home component
const Home = () => (
  <div className="Home">
    <h1> Home Page </h1>
    <body>hi</body>
  </div>
)

export default App;
