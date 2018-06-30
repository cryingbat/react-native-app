import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';
import Head from '../../common/Head'
export default class SpinnerExample extends Component {
  render() {
    return (
      <Container>
        <Head title='Spinner' pushDetails = {() => {this.props.navigation.goBack();}}/>
        <Content>
          <Spinner />
          <Spinner color='red' />
          <Spinner color='green' />
          <Spinner color='blue' />
        </Content>
      </Container>
    );
  }
}