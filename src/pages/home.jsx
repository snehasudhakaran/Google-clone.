import React from 'react';
import Header from '../components/homePageHeader';
import HomePageBodySection from '../components/homePageBodySection';

// Home Page
function Home() {
  return (

    // start
    <div className='home'>

      {/* Google search home page header section */}
      <Header/>

      {/* Google search home page Body section */}
      <HomePageBodySection/>

    </div>
    // end

  )
};

export default Home;