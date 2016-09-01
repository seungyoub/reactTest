import React from 'react';

class Contents extends React.Component {
  _sayHello(){
    alert('hello')
  }

  render() {

    let text = this.props.text;
    let cat = this.props.cat;

    let pStyle = {
      color: 'aqua',
      backgroundColor: 'black'
    }

    return (
      <div>
        <h1>Hello {text}</h1>
        <h2>Welcome {cat}</h2>
        <b onClick={this._sayHello}>say</b>
        <p style = {pStyle}>{1 == 1 ? 'true' : 'false'}</p>
      </div>
    )
    //return React.createElement('h1', null, 'Hello World!')
  }
}

//props 타입 설정
//isRequired는 필수로 있어야 하는 값
Contents.propTypes = {
  text: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

export default Contents;
