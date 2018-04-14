import React, { Component } from 'react';
import { AsyncStorage, TextInput } from 'react-native';
import { Container, Header,Text, Content, Button, Form, Item,  Label } from 'native-base';
import md5 from 'md5'
const AsyncStorageKey = "AS_";
const zm = 'AQZWSXCDERFVBGTYHNMJUIKLOPqazxswedcvfrtgbnhyujmkliop';
const text = md5(Math.round(Math.random()*zm.length));
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      username: 'dsa',
      password: '123456',
    }
  }
  toHome() {
    // AsyncStorage.setItem(AsyncStorageKey,text,()=>{
    //   this.setState({
    //     tookenState: text,
    //   });
      this.props.navigation.navigate('Tab');
    // });
  }
  componentDidMount() {
    // AsyncStorage.getItem(AsyncStorageKey, (err, text) => {
    //   if(text === null){
    //     console.log('没存呢！');
    //   }else{
    //     // alert(text);
    //     this.props.navigation.navigate('Tab');
    //   }
    // })
  }
  render() {
    return (
      <Container>
        <Header style={{display: 'flex',}}>
            <Text style={{color: '#fff', textAlignVertical:'center',}}>Login</Text>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <TextInput />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <TextInput />
            </Item>
            <Button 
              block 
              style={{margin: 20 }} 
              onPress={this.toHome.bind(this)}
            >
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}