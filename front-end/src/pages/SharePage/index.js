import React, { Component } from 'react'

require("./index.css");

export class SharePage extends Component {
    constructor(props){
      super(props);
      this.state ={
        share: null
      };
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
