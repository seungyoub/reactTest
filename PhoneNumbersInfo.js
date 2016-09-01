import React from 'react'

class PhoneNumbersInfo extends React.Component{

  _isClick(){
    this.props.onSelect(this.props.indexNum)
  }

  render(){

    let getStyle = isSelect => {
      if(!isSelect) return;

      let style = {
        fontWeigth: 'bold',
        backgroundColor: 'aqua'
      };
      return style;
    }

    return(
      <li style={getStyle(this.props.isSelect)} onClick={this._isClick.bind(this)}>{this.props.name} {this.props.phone} {this.props.indexNum}</li>
    )
  }
}

export default PhoneNumbersInfo;
