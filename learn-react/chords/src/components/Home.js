import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChordEditor from './components/ChordEditor';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

class Home extends Component {
  render() {
    return (
      
      <React.Fragment>
      
      <div className="wrapper">
        <Navigation/>
        

        <Header />
        <div className="workspace">
          <ChordEditor />
        </div>
        <Footer />

      </div>

      </React.Fragment>
      
    );
  }
}

export default Home;