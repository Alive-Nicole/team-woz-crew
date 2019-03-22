import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NewsAPI from 'newsapi';

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

  render() {

    return (
      <Container fluid={true}>
        <h3>News Articles</h3>
        <hr></hr>
        <Row>
          { this.state.articles.map( ( article, index ) => {
            return (
              <Col key={ index } md="5">
                <p className="content">{ article.title }</p>
                <small className="content">{ article.author }</small>
                { article.urlToImage ? <a target="_blank" href={ article.url }><Image src={ article.urlToImage } thumbnail /></a> : <div></div> }
                {/* <p className="content">{ article.description }</p> */}
                <a target="_blank" href={ article.url }>Click To View Article</a>                
                <hr></hr>
                <hr></hr>
              </Col>
            )}) }
        </Row>
      </Container>
    )
  }
}

export default NewsFeeds
