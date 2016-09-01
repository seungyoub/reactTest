import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "Header"
    };
  }

  _updateState(text){
    this.setState({
      title: "Header Changed"
    });
  }

  render() {
    return (
      <div>
        <h1 onClick={this._updateState.bind(this)}>{this.state.title}</h1>
        <br />
      </div>
    )
  }
}

export default Header;
