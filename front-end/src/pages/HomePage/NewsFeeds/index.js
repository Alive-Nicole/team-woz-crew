import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const TechCrunch_API = '694a36dcc42a4cbf9922f6435b66ac77'

export class NewsFeeds extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.getNews()
  }
  // Get API for news feeds.
  getNews = async () => {
    await axios.get(`https://cors-anywhere.herokuapp.com/newsapi.org/v2/everything?sources=techcrunch&apiKey=${TechCrunch_API}`,{crossDomain: true})
   //  .then(data => data.json())
    .then(payload => {
      this.setState({ articles: payload.data.articles })
    }).catch(err =>{
     console.log(err);
   })
 }
 
  //Get Tech Crunch API
  // getTechCrunch = () => {
  //   const NewsAPI = require('newsapi');
  //   const newsApi = '694a36dcc42a4cbf9922f6435b66ac77'

  //   // To query sources
  //   newsapi.v2.sources({
  //     sources: 'techcrunch',
  //     category: 'technology',
  //     language: 'en',
  //     country: 'us'
  //   })
  //   .then(response => {

  //     var res = response.sources;
  //     console.log(res[5]);

  //     var newsFeeds = []

  //     for(var i=0; i<10; i++){
  //       console.log(res[i].name);

  //       newsFeeds.push({
  //         id: i,
  //         name: res[i].name,
  //         description: res[i].description,
  //         url: res[i].url.toString()
  //       })
  //     }
  //     console.log(newsFeeds)
  //     this.setState({news: newsFeeds})

  //   });

    // fetch(`https://newsapi.org/v2/everything?sources=techcrunch&apiKey=${TechCrunch_API}`)
    // .then((res) => res.json())
    // .then((data) => {

    //   var response = data.articles;
    //   var newsFeeds = []

    //   for(var i = 0; i<5; i++){
    //     console.log(response[i].url);
    //     newsFeeds.push({
    //       id: i,
    //       title: response[i].title,
    //       description: response[i].description,
    //       url: response[i].url.toString()
    //     })
    //   }
    //   console.log(newsFeeds)
    //   this.setState({news: newsFeeds})
    // })
         
 // }
  render() {
    //const {news} = this.state;

    return (
      <div  className="news-feed">
        <h3>News Articles</h3>
        <hr></hr>
        <div>
          { this.state.articles.map( ( article, index ) => {
            return (
              <div key={ index }>
               <a href ={article.url} target="blank">
                <p className="content">{ article.title }</p> </a>
                <small className="content">{ article.author }</small>
                <p className="content">{ article.description }</p>
                <hr></hr>
              </div>
            )}) }
        </div>
      </div>
    )
  }
}

export default NewsFeeds
