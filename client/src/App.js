import React, { Component } from 'react';

import Footer from './components/Footer'
import Header from './components/Header'
import CitationComponent from './components/CitationsComponent'

import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <CitationComponent />
        {/* <div>
          <h1>Quote Text: </h1>
          <p>{this.state.response.quoteText}</p>
          <h2>Author: </h2>
          <p>{this.state.response.quoteAuthor}</p>
        </div> */}
        <Footer/>
      </div>
    );
  }
}

export default App;