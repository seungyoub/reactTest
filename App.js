import React from 'react';
import Header from './Header';
import Contents from './Contents';
import RandomNumber from './RandomNumber';
import MyRandomNumber from './MyRandomNumber';
import PhoneNumbers from './PhoneNumbers'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      value: Math.round(Math.random()*100)
    };

    this._updateValue = this._updateValue.bind(this);
  }

  _updateValue(randomValue){
    this.setState({
      value: randomValue
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Contents text={this.props.text} cat={this.props.cat}/>
        <RandomNumber number={this.state.value} onUpdate={this._updateValue} />
        <MyRandomNumber />
        <PhoneNumbers />
      </div>
    )
  }
}

export default App
