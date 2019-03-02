import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Form, Button} from 'react-bootstrap';
import {Share} from '../../Share/Share';

export class NewsFeeds extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: 'url'
    }
    //this.getTechCrunch();
   
  }

  // Create method to post URL to /share message box
  handleSubmit(data){
    console.log("Successfully posted");
     
  }

  
  //Get Tech Crunch API
  // getTechCrunch = () => {
  //   const NewsAPI = require('newsapi');
  //   const newsapi = new NewsAPI('694a36dcc42a4cbf9922f6435b66ac77');

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
    //console.log(this.state.news);
    return (
      <div  className="news-feed">
        <Form onSubmit={this.handleSubmit}></Form>
        <div>
          <h3 align="center">NewsFeed</h3>
          <div className="content">

            <div className="content1">
              <h5>News 1</h5>
              <div className="description">
              Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite do if. 
              </div>
              <a href="/url-of-post" _target="blank">Read more...</a>
              <Link to="/share">
                <Button variant="info">Share</Button>
              </Link>
              
            </div>

            <div className="content2">
              <h5>News 2</h5>
              <div className="description">
              Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite do if. 
              </div>
              <a href="/url-of-post" _target="blank">Read more...</a>
              <Link to="/share">
                <Button variant="info">Share</Button>
              </Link>
            </div>

            <div className="content3">
            <h5>News 3</h5>
              <div className="description">
              Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite do if. 
              </div>
              <a href="/url-of-post" _target="blank">Read more...</a>
              <Link to="/share">
                <Button variant="info">Share</Button>
              </Link>
            </div>

          </div>


          {/* {this.state.news.map(article => (
            <div key={article.id} className = "section">
              <a href={article.url} _target="blank"><h5>{article.name}</h5></a>
              <p>{article.description}</p>
            </div>
          ))} */}

        </div>
      </div>
    )
  }
}

export default NewsFeeds
