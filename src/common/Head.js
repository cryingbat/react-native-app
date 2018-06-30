import React, { Component } from 'react';
import {  Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class Head extends Component {
  passMenthod = () =>{
    this.props.pushDetails()
  }
  render() {
    return (
      <Header>
          <Left>
            <Button transparent 
            	onPress={()=>this.passMenthod()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    );
  }
}
