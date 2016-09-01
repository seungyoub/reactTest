import React from 'react';

class EditPhoneNumber extends React.Component{

  _changeData(){
    this.props.changeEditPhoneNumber(document.getElementById('editName').value, document.getElementById('editPhone').value)
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true;
  }

  render(){

    let getStyle = () => {
      if(this.props.selectNum != -1) return;

      let style = {
        display: 'none'
      };
      return style;
    }

    return(
      <div>
        <input style={getStyle()} id="editName" placeholder="name" value={this.props.editName} onChange={this._changeData.bind(this)}></input>
        <input style={getStyle()} id="editPhone" placeholder="phone" value={this.props.editPhone} onChange={this._changeData.bind(this)}></input>
        <button style={getStyle()} id="edit" onClick={this.props.editPhoneNumber}>edit</button>
      </div>
    )
  }
}

export default EditPhoneNumber;
