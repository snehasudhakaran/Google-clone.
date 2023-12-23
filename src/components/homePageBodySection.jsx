import React from 'react';
import '../pages/home.css';
import { Search } from './search';

// Home page body section
function HomePageBodySection() {
  return (
    <section className="home_body">
        <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'></img>
        <div className="home_inputContainer">
          <Search/>
        </div>
      </section>
  )
}

export default HomePageBodySection



