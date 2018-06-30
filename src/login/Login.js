import React, { Component } from 'react';
import { AsyncStorage, TextInput,StyleSheet } from 'react-native';
import { Container, Header,Text, Content, Button, Form, Item,  Label } from 'native-base';
import md5 from 'md5';
import { connect } from 'react-redux';
// import { changeText } from '../store/shop/action'
const AsyncStorageKey = "AS_";
const zm = 'AQZWSXCDERFVBGTYHNMJUIKLOPqazxswedcvfrtgbnhyujmkliop';
const text = md5(Math.round(Math.random()*zm.length));
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      username: 'dhq',
      password: '123456',
    }
  }
  static navigationOptions = {
    header: (navigation, defaultHeader) => {
      visible: false  
    },
  };
  toHome() {
    if(this.state.username === 'dhq' && this.state.password === '123456'){
       AsyncStorage.setItem(AsyncStorageKey,text,()=>{
        this.props.navigation.navigate('Tab');
      });
    }
  }
  changeUser(text) {
    this.setState({
      username: text,
    })
  }
  changePass(text) {
    this.setState({
      password: text,
    })
  }
  render() {
    return (
      <Container>
        <Header style={{display: 'flex',}}>
            <Text style={{color: '#fff', textAlignVertical:'center',}}>Login</Text>
        </Header>
        <Content>
              <TextInput 
                editable={false}
                style={styles.in}
                value={this.state.username}
                onChangeText={(text) => this.changeUser(text)}
              />
              <TextInput 
                value = {this.state.password} 
                editable={false}
                style={styles.in}
                secureTextEntry={true}
                onChangeText={(text) => this.changePass(text) } 
              />
            <Button 
              block 
              style={{margin: 20 }} 
              onPress={this.toHome.bind(this)}
            >
              <Text>登录</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}
  const styles = StyleSheet.create({
    in: {
      paddingLeft: 10
    }
  })
// const mapStateToProps = (state) => {
//     return {
//         value: state.text,
//     }
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//          onchange: () => dispatch(changeText('ok'))
//     }
// };
// export default  connect(mapStateToProps,mapDispatchToProps)(Login)
