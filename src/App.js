import React, { Component } from 'react';
import './asset/App.css';

import TopMenu from './layout/TopMenu'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Content from './component/Content'

class App extends Component {
  render() {
    console.log(Content.prototype)
    return (
      
    <div className="App">
      <header className="_define_later">
        {/* <TopMenu /> */}
        {/* <Header /> */}
        <div className="container">
          <div className="row pt-5">
            <Content title="About to rock..." img="01.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <Content title="We salute you!" img="02.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <Content title="Let there be rock!" img="03.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          </div>
          <div className="row pt-5">
            <Content title="About to rock..." img="01.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <Content title="We salute you!" img="02.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <Content title="Let there be rock!" img="03.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          </div>
          <div className="row pt-5">
            <Content title="About to rock..." img="01.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <Content title="We salute you!" img="02.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <Content title="Let there be rock!" img="03.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          </div>
          <div className="row pt-5">
            <Content title="About to rock..." img="01.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <Content title="We salute you!" img="02.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <Content title="Let there be rock!" img="03.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          </div>
        </div>
        {/* <Footer /> */}
      </header>
    </div>
  );
  }
}

export default App;
