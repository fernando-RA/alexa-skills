import React, { Component } from 'react';

import Footer from './components/Footer'
import Header from './components/Header'
import CitationComponent from './components/CitationsComponent'

import './style.css';

class App extends Component {
  state = {
    response: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:9000/quote');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
      <Header />
      <CitationComponent />
        <div>
          <h1>Quote Text: </h1>
          <p>{this.state.response.quoteText}</p>
          <h2>Author: </h2>
          <p>{this.state.response.quoteAuthor}</p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;