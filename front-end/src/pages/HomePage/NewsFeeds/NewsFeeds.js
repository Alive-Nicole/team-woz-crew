import React, { Component } from 'react';

const TechCrunch_API = "c4e2c7c9c884437086972ec602a6cebd"

export class NewsFeeds extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: 0,
      title: "",
      description: "",
      url: "",
    }
    this.getTechCrunch();
  }


  //Get Tech Crunch API
  getTechCrunch() {
    fetch(`https://newsapi.org/v2/everything?sources=techcrunch&apiKey=${TechCrunch_API}`)
    .then((res) => res.json())
    .then((data) => {

      var response = data.articles;
      for(var i = 0; i<response.length; i++){
        console.log(response[i].url);
        this.setState({
          id: i,
          title: response[i].title,
          description: response[i].description,
          url: response[i].url.toString()
        })
      }
    })
         
  }
  render() {
    //console.log(this.getTechCrunch());
    return (
      <div  className="news-feeds">
        <h3>News Feeds</h3>
        <div key={this.props.id} className = "section">
        <a href={this.props.url} _target="blank"><h5>{this.props.title}</h5></a>
        <p>News content</p>
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
