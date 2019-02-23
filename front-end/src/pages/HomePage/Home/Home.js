import React, { Component } from 'react';
import NewsFeeds from '../NewsFeeds/NewsFeeds';
import Jobs from '../Jobs/Jobs';
import Events from '../Events/Events';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      home: [
        {
          id: 1,
          section: 'News Feeds',
          content: [],
          isLoaded: false,
          recent: false
        },
        {
          id: 2,
          section: 'Jobs',
          content: [],
          isLoaded: false,
          recent: false
        },
        {
          id: 3,
          section: 'Events',
          content: [],
          isLoaded: false,
          recent: false
        }
      ]
    }
  }

  fetchTwitterApi(){
    fetch('https://api.twitter.com/1.1/search/tweets.json?q=Hackathon&src=tyah')
    .then(res => res.json())
    .then(json => {
      this.setState({
        section: NewsFeeds,
        isLoaded: true,
        content: json,
      })
    })
  }
  
  render() {
    // var {isLoaded, content} = this.state;
    // if(!isLoaded){
    //   return <div>Loading...</div>
    // }
    // else{
      return(
        <div className='home'>
          <div className='news'>
            <NewsFeeds />
            
          </div>
  
          <div className='jobs'>
            <Jobs />
            
          </div>
  
          <div className='events'>
            <Events />
            
          </div> 
  
        </div>
      );
    }    
  //}
}

export default Home;