import React, { Component } from 'react';

const TechCrunch_API = "694a36dcc42a4cbf9922f6435b66ac77"

export class NewsFeeds extends Component {

  constructor(props){
    super(props);
    this.state = {
     newsFeeds: []
    }
    this.getTechCrunch();
  }


  //Get Tech Crunch API
  getTechCrunch() {
    fetch(`https://newsapi.org/v2/everything?sources=techcrunch&apiKey=${TechCrunch_API}`)
    .then((res) => res.json())
    .then((data) => {

      var response = data.articles;
      var newsFeeds = []

      for(var i = 0; i<5; i++){
        console.log(response[i].url);
        newsFeeds.push({
          id: i,
          title: response[i].title,
          description: response[i].description,
          url: response[i].url.toString()
        })
      }
      console.log(newsFeeds)
      this.setState({newsFeeds: newsFeeds})
    })
         
  }
  render() {
    console.log(this.state.newsFeeds);
    return (
      <div  className="news-feeds">
        <h3>News Feeds</h3>
        <div key={this.props.id} className = "section">
        {this.state.newsFeeds.map(article => (
         <div>
            <a href={article.url} _target="blank"><h5>{article.title}</h5></a>
            <p>News content</p>
          </div>
       ))}
        
        
      </div>
        
        {/* <tbody>
          <tr className="highlights">
            <td id="title">
              {this.props.news.title}
            </td>
            <td id="description">
              {this.props.news.description}
            </td>
          </tr>
          <tr className="main-news">
            {this.props.news.content}
          </tr>
        </tbody> */}
      </div>
    )
  }
}

export default NewsFeeds
