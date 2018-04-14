import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
 
export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };
 
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
 
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 ,}}>
            <Text >Hello!我是modal</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text style={{color: '#fff'}}>点我关闭modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}