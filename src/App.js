import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App(props) {
  return (
    <div>
      <Header/>
      
      <HelloWorld name="Jay" city="Gaya"/>

      <Footer/>
    </div>
  );
}

export default App;
