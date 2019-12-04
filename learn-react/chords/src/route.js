import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import NewPage from './components/NewPage';
const routing = (
  <Router>
    <div>
    {/* <Route path="/" exact component={App} /> */}
    
      <Route exact path="/" component={NewPage} />
    
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))