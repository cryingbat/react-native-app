import React, { Component } from 'react';
import {ToastAndroid } from 'react-native'
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import Head from '../../common/Head'
export default class CheckBoxExample extends Component {
  constructor(props) {
    super(props);
    this.state={
      select1:false,
      select2: true,
    }
  }
  render() {
    return (
      <Container>
        <Head title='CheckBox' pushDetails = {() => {this.props.navigation.goBack();} }/>
        <Content>
          <ListItem>
            <CheckBox checked={this.state.select1} color="green" onPress={()=> {
              this.setState({
                select1: !this.state.select1
            })}}/>
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={this.state.select2} color="red" onPress={()=> {
              this.setState({
                select2: !this.state.select2
            })}}/>
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
