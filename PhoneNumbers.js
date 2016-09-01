import React from 'react'
import PhoneNumbersInfo from './PhoneNumbersInfo'
import AddPhoneNumber from './AddPhoneNumber'
import EditPhoneNumber from './EditPhoneNumber'

import update from 'react-addons-update'

class PhoneNumbers extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      phoneNumbersData : [
        {name: "Abet", phone: "010-0000-0001"},
        {name: "Betty", phone: "010-0000-0002"},
        {name: "Charlie", phone: "010-0000-0003"},
        {name: "David", phone: "010-0000-0004"}
      ],
      newName: '',
      newPhone: '',
      selectNum: -1,
      selectData: {
        name: '',
        phone: ''
      }
    }
  }

  _addPhoneNumber() {
    this.setState({
      phoneNumbersData: update(this.state.phoneNumbersData, {
          $push : [{'name': this.state.newName, 'phone': this.state.newPhone}]
      }),
      newName: '',
      newPhone: ''
    })
  }

  _newPhoneNumbers(name, phone) {
    this.setState({
      'newName' : name,
      'newPhone' : phone
    })
  }

  _isSelect(key) {
    if(this.state.selectNum == key){
      return true;
    }
    else {
      return false;
    }
  }

  _onSelect(key) {
    if(key == this.state.selectNum){
      this.setState({
        selectNum: -1,
        selectData: {
          name: '',
          phone: ''
        }
      })
      return ;
    }
    this.setState({
      selectNum: key,
      selectData: this.state.phoneNumbersData[key]
    })
  }

  _deletePhoneNumber() {
    this.setState({
      phoneNumbersData: update(this.state.phoneNumbersData, {
          $splice : [[this.state.selectNum, 1]]
      }),
      selectNum: -1,
      selectData: {
        name: '',
        phone: ''
      }
    })
  }

  _editPhoneNumber() {
    this.setState({
      phoneNumbersData: update(this.state.phoneNumbersData, {
        [this.state.selectNum]: {
          name: {$set: this.state.selectData.name},
          phone: {$set: this.state.selectData.phone}
        }
      }),
      selectNum: -1,
      selectData: {
        name: '',
        phone: ''
      }
    })
  }

  _changeEditPhoneNumber(name, phone) {
    this.setState({
      selectData: {
        'name': name,
        'phone': phone
      }
    })
  }

  render() {
    return(
      <div>
      <br />
        <ul>
          {this.state.phoneNumbersData.map((phoneNumber, i) => {
            return (<PhoneNumbersInfo name = {phoneNumber.name}
                                      phone = {phoneNumber.phone}
                                      key = {i}
                                      indexNum = {i}
                                      isSelect = {this._isSelect.bind(this)(i)}
                                      onSelect = {this._onSelect.bind(this)}

                    />);
          })}
        </ul>
        <button onClick={this._deletePhoneNumber.bind(this)}>deletePhoneNumber</button><br />
        <br />
        <EditPhoneNumber editName = {this.state.selectData.name}
                         editPhone = {this.state.selectData.phone}
                         editPhoneNumber = {this._editPhoneNumber.bind(this)}
                         changeEditPhoneNumber = {this._changeEditPhoneNumber.bind(this)}
                         selectNum = {this.state.selectNum}/>
        <br />
        <AddPhoneNumber newPhoneNumbers = {this._newPhoneNumbers.bind(this)}
                        addPhoneNumber = {this._addPhoneNumber.bind(this)}
                        newName = {this.state.newName}
                        newPhone = {this.state.newPhone}/>
      </div>
    )
  }
}

export default PhoneNumbers;
