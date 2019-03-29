import React, { Component } from 'react'
import axios from 'axios'

require("./index.css");

export class SharePage extends Component {
    constructor(props){
      super(props);
      this.state ={
        share: null
      };
    }
    
    componentDidMount() {
      axios.get("api/share/shared-items")
      .then( payload => console.log('====payload====', payload) )
    }

  render() {
    return (
      <div>
        Post from Share form will be posted here
      </div>
    )
  }
}

export default SharePage
