import React from 'react';

class Box extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick = () => {
    this.props.removeBox();
  }
  render(){
    const props = this.props;
    const divStyle = {
      backgroundColor: props.color,
      width: `${props.width}px`,
      height: `${props.height}px`
    }
    return (
      <div className="Box" >
        <div style={divStyle}>
        </div>
        <button onClick={this.props.removeBox}>X</button>
      </div>
    )
  }
}

export default Box;