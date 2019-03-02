import React, { Component } from 'react'
import {Jumbotron, Grid, Row, Form, Button} from 'react-bootstrap';


export class Share extends Component {
    constructor(props){
        super(props);
        this.state = {
          url: 'url'
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        alert(`Sent successfully`);
        window.location = '/home';
    }

    copyURL(url){

    }



  render() {
    return (
        <div>
            <h5>Please fill out this form to share a post to a user.</h5>
        <form name="shareForm" className="form-horizontal" onSubmit={this.handleSubmit}>
            
            <div className="username">
                <label className="col-sm-2 control-label required" htmlFor="username">Username</label>
                <div className="col-sm-10">
                    <input type="text"
                            id="username"
                            required="required"
                            className="form-control"
                            placeholder="Share with..." />
                </div>
            </div>
            <div className="message">
                <label className="col-sm-2 control-label" htmlFor="message">Message</label>
                <div className="col-sm-10">
                    <textarea type="text"
                            id="blog_post_body"
                            className="form-control"
                            placeholder="Message for user." />
                </div>
            </div>
            
            <div className="send">
                <div className="col-sm-10">
                    <Button type="submit" value="Submit">
                        Send
                    </Button>
                </div>
            </div>
            
        </form>
    </div>
    )
  }
}

export default Share
