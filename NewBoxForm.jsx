import React from 'react';

class NewBoxForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: '', width: '', height: ''}
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBox(this.state);
    this.setState({color: '', width: '', height: ''});
  }

  

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return (
      <div className="NewBoxForm">
        <form onSubmit={this.handleSubmit} >
          <div>
            <label>Background color: </label>
            <input type='text' name='color' value={this.state.color} onChange={this.handleChange}/>
          </div>
          <div>
            <label>Width: </label>
            <input type='text' name='width' value={this.state.width} onChange={this.handleChange}/>
          </div>
          <div>
            <label>Height: </label>
            <input type='text' name='height' value={this.state.height} onChange={this.handleChange}/>
          </div>
          <div> <input type='submit' value="Submit" /> </div>
        </form>
      </div>
    )
  }
}

export default NewBoxForm;