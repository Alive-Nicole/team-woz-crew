import React, { Component } from 'react';
import NewsFeeds from '../NewsFeeds/NewsFeeds';
import Jobs from '../Jobs/Jobs';
import Events from '../Events/Events';

class Home extends Component {

  render() {
    
    return(
      <div className='home'>

        <div className='news'>
          <NewsFeeds />
        </div>

        <div className='jobs'>
          <Jobs/>
        </div>

        <div className='events'>
          <Events />
        </div> 
      </div>
    );
  }    
}

export default Home;