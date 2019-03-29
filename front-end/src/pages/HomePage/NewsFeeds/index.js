import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import NewsAPI from 'newsapi';

require('./index.css')

const TechCrunch_API = '694a36dcc42a4cbf9922f6435b66ac77'
const newsapi = new NewsAPI(TechCrunch_API);

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
    const payload = await newsapi.v2.topHeadlines({
      category: 'technology',
      language: 'en',
      country: 'us'
    })
    this.setState({ articles: payload.articles })
 }

 handleShareAction = ( index ) => {
    const { articles } = this.state
    const article = articles[ index ]
    axios.post("/api/share/add", { type: "article", payload: article })
    .then( response => {
      console.log("newsFeed response", response)
    })
    .catch( err => {
      console.log('====err====', err)
    })
  }

  render() {
    console.log('====this.state.articles[0]====', this.state.articles[0])
    return (
      <Container fluid={true} className="center">
        <h2><u>News Articles</u></h2>
        <hr></hr>
        <Row className="article-row">
          { this.state.articles.map( ( article, index ) => {
            return (
              <Col key={ index } md="4" className="article center">
                <a target="_blank" href={ article.url }><h4 className="content">{ article.title }</h4></a>
                <small className="content">{ article.author }</small>
                { article.urlToImage ? <a target="_blank" href={ article.url }><Image src={ article.urlToImage } thumbnail /></a> : <div></div> }
                <a target="_blank" href={ article.url }><u>Click To View Article</u></a>         
                <Button className="btn" variant="dark" onClick={ this.handleShareAction.bind(this, index) }>Share</Button>       
                <hr></hr>
              </Col>
            )}) }
        </Row>
      </Container>
    )
  }
}

export default NewsFeeds
