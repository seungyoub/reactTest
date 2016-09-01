import React from 'react';

class MyRandomNumber extends React.Component{

  _update(){
    this.setState({
      number: Math.round(Math.random()*100)
    })
  };

  constructor(props){
    super(props);

    this.state = {
      number: Math.round(Math.random()*100)
    };

    this._update = this._update.bind(this);
  };

  render(){
    return(
      <div>
        <h2>MyNumber: {this.state.number}</h2>
        <button onClick={this._update}>randomize</button>
      </div>
    )
  }
}

export default MyRandomNumber;
