import React, {Component} from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Message from './components/Message';
import Products from './components/Products';



class App extends Component {
  render(){
  return (
    <div>
        <Header/>
        <main id="mainContainer">
            <div className="container">
                <Products/>
                <Message/>
                <Cart/>
            </div>
        </main>
      <Footer/>
    </div>
  );
}}

export default App;
