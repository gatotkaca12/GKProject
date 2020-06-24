import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import "../node_modules/slick-carousel/slick/slick.css"
import "../node_modules/slick-carousel/slick/slick-theme.css"

import Home from './components/Home/Home'
import About from './components/About/About'
import Wisata from './components/Wisata/Wisata.app'
import Kuliner from './components/Wisata/Kuliner/Kuliner.app'
import Covid from './components/Covid/covid.app'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/news.app'
import Footer from './components/footer/footer.app'


class App extends Component{

  render(){
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div >
          <Route exact path='/' component={Home} />
          <Route path='/wisata' component={Wisata} />
          <Route path='/kuliner' component={Kuliner} />
          <Route path='/about' component={About} />
          <Route path='/covid' component={Covid} />
          <Route path='/news' component={News} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
  }

export default App;
