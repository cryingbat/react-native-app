import React, { Component } from 'react';
import { Container, Content, Icon } from 'native-base';

export default class IconExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Icon name='home' />
          <Icon ios='ios-menu' android="md-menu" style={{ color: 'red'}}/>
        </Content>
      </Container>
    );
  }
}
