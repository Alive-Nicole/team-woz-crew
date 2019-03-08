import React, {Component} from 'react';

export default class Editable extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false,
    }

    this.handleInteraction.bind(this)
    this.handleChange.bind(this)
  }

  // componentDidUpdate() 
  
  handleChange = event => {
    // const text = event.target;
    console.log('====props====', this.props, event)
    // this.props.onChange(this.props.id, text);
  }
  
  handleInteraction() {
    const { clicked } = this.state
    
    let flip = clicked ? false : true
    this.setState({ clicked: flip })
  }
  
  render() {
    console.log('====this.props====', this.props)
    return (
      <div onClick={this.handleInteraction.bind(this)}>
        {this.state.clicked ? 
          <input 
            name="username" 
            value={this.props.value}
            onChange={this.props.onChange}
            type="text" 
            className="form-control" 
          /> :
          <p>{this.props.value}</p> 
        }
      </div>
    )
  }
}