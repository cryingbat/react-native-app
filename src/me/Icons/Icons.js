import React, { Component } from 'react';
import { Container, Content, Icon } from 'native-base';
import Head from '../../common/Head'
export default class IconExample extends Component {
  render() {
    return (
      <Container>
      <Head title='Icon' pushDetails = {() => {this.props.navigation.goBack();}}/>
        <Content>
          <Icon name='home' />
          <Icon ios='ios-menu' android="md-menu" style={{ color: 'red'}}/>
        </Content>
      </Container>
    );
  }
}
