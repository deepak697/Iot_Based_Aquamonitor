import React from 'react';
import ArduinoData from '../ArduinoData';
import Nav from '../navbar/navbar';
import Body from '../body/body';
import Head from '../head/head';
import Footer from '../footer/footer';




function Homepage() {
  return (
    <div className="App">
      
      <Head />
      <Body />
      <ArduinoData />
      <Footer />



    </div>
  );
}

export default Homepage;
