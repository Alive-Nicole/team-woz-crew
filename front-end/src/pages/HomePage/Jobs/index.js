import React, { Component } from 'react';
import { Container, Button, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';

require("./index.css");

export class Jobs extends Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: [],
      interest: 'nodeJs',
      readMore: false,
      modalData: { title: "", description: "<div></div>", company: "", location: "" }
    }
  }

  componentDidMount = () => {
    this.getGitHubJobs();
    
  }

  handleModalShow = ( index ) => {
    const { jobs, readMore } = this.state

    this.setState({ readMore: !readMore, modalData: jobs[index] })
  }

  handleShareAction( index ) {
    const { jobs } = this.state
    const job = jobs[ index ]
    axios.post("/api/share/add", { type: "job", payload: job })
    .then( response => {
      console.log("job response", response)
    })
    .catch( err => {
      console.log('====err====', err)
    })
  }

  // Get GitHubJobs API.
  getGitHubJobs = async () => {
    let interest = this.state.interest;

    const jobs = await axios.get(`https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?description=${interest}&location=us`,{crossDomain: true})

    this.setState({
      jobs: jobs.data
    })
  }

    
  render() {
    const { modalData, jobs, readMore } = this.state
    console.log('====jobs[0]====', this.state.jobs[0])

    return (
      <Container fluid={true}  className="center">
        <h2><u>Jobs</u></h2>
        <hr></hr>
        <Row className="">
          { jobs ? jobs.map(( job, index ) => {
            return (
              <Col key={ index } md="4" className="center">

                <div className="job-title">
                  <h4>{ job.title }</h4>
                </div>

                <div className="job-content">
                  <p><strong>Company:</strong> { job.company }  |  <strong>Location:</strong> { job.location }</p>
                </div>
                <Row>                  
                  <Col>
                    <Button variant="outline-dark" onClick={ this.handleModalShow.bind( this, index )}>Read More</Button>
                  </Col>
                  <Modal
                      { ...this.props }
                      show={ readMore }
                      onHide={ this.handleModalShow.bind( this, index )}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                        <h4>{ modalData.title } </h4>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h5>Company: { modalData.company }  |  Location: { modalData.location }</h5>
                      <div className="job-description">
                        <div>Description: { parse(modalData.description) }</div>
                      </div>
                      <a className="btn btn-outline-dark" href={ modalData.url } target="_blank" rel="noopener noreferrer">Go To Posting</a>
                    </Modal.Body>                  
                  </Modal>
                  <Col>
                    <a className="btn btn-outline-dark" href={ job.url } target="_blank" rel="noopener noreferrer">Go To Posting</a>
                  </Col>
                  <Col>
                    <Button className="btn" variant="dark" onClick={ this.handleShareAction.bind(this, index) }>Share</Button>
                  </Col>
                </Row>
                <hr></hr>
              </Col>
            )
            }) : <div><br></br><h4 className="center">Loading...</h4><br></br></div>
          }        
        </Row>
      </Container>
    )
  }
}
    
export default Jobs
    

    



    







































































































    

