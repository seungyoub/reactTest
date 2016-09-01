import React from 'react'

class AddPhoneNumber extends React.Component{

  _writePhoneNumber(){
    this.props.newPhoneNumbers(document.getElementById('addName').value, document.getElementById('addPhone').value)
  }

  render(){
    return(
      <div>
        <input id='addName' placeholder='name' value={this.props.newName} onChange={this._writePhoneNumber.bind(this)}></input>
        <input id='addPhone' placeholder='phone' value={this.props.newPhone} onChange={this._writePhoneNumber.bind(this)}></input>
        <button onClick={this.props.addPhoneNumber}>addPhoneNumber</button>
      </div>
    )
  }
}

export default AddPhoneNumber;
