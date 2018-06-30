import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Radio,Left, Right } from 'native-base';
import Head from '../../common/Head'
export default class RadioExample extends Component {
  constructor(props){
    super(props);
    this.state={
      radioState: false,
    }
  }
  render() {
    return (
      <Container>
        <Head title='radio' pushDetails = {() => {this.props.navigation.goBack();}}/>
        <Content>
        <ListItem>
        <Left>
          <Text>Lunch Break</Text>
        </Left>
        <Right>
          <Radio
            color={"#f0ad4e"}
            selectedColor={"#5cb85c"}
            selected={!this.state.radioState}
            onPress={()=> {
              this.setState({
                radioState:!this.state.radioState
              })
            }}
          />
        </Right>
      </ListItem>
      <ListItem>
        <Left>
          <Text>Discussion with Client</Text>
        </Left>
        <Right>
          <Radio
            color={"#f0ad4e"}
            selectedColor={"#5cb85c"}
            selected={this.state.radioState}
            onPress={()=> {
              this.setState({
                radioState:!this.state.radioState
              })
            }}
          />
        </Right>
      </ListItem>
        </Content>
      </Container>
    );
  }
}
