import React, { Component, PureComponent } from 'react';
import './asset/App.css';

import TopMenu from './layout/TopMenu'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Content from './component/Content'

class App extends Component {
  constructor(props) {
    console.log('Constructor chạy.');
    super(props);
    this.state = {
      trangthai: "current_state"
    }
  }
  /** Lifecycle for Mounting Component */
  componentWillMount() {
    console.log('componentWillMount chạy.');
  }

  componentDidMount() {
    console.log('componentDidMount chạy.');
  }
  componentWillReceiveProps(){
    
  }
  /** Lifecycle For Updating State */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate chạy.', nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate chạy.', nextState);
  }
  // => render()
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate chạy.', prevState);
  }

  componentWillUnmount(){
    console.log("Unmount");
  }
/** */
  changeState = () => {
    this.setState({
      trangthai: 'new_state'
    })
  }
  render() {
    // console.log(App.prototype)
    console.log("Render chạy.");
    return (
      <div className="App">
        <header className="_define_later">
          <TopMenu />
          <Header />
          <div className="container">
            <div className="row pt-5">
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.changeState()}>Change State</button>
            </div>
          </div>
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
