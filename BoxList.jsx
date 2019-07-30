import React from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid/v4';

class BoxList extends React.Component {
  constructor(props){
    super(props);
    this.state = { boxes: []}
  }

  remove = (id) => {
    this.setState({boxes: this.state.boxes.filter(i => i.id !== id)})
  }

  addBox = (item) => {
    const newItem = {...item, id: uuid()}
    this.setState(state => ({
      boxes: [...state.boxes, newItem]
    }));
  }


  render(){
    const renderBox = this.state.boxes.map( b => (
      <Box 
      color={b.color}
      width={b.width}
      height={b.height}
      id={b.id}
      key={b.id}
      removeBox={() => this.remove(b.id)}
      />
    ))
    return (
      <div className="BoxList">
        <h1>Box List</h1>
        {renderBox}
        <NewBoxForm addBox={this.addBox}/>
      </div>
    )
  }
}

export default BoxList;