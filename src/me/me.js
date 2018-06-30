import React, { Component } from 'react';
import { Image, StyleSheet, AsyncStorage } from  'react-native'
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
const AsyncStorageKey = "AS_";
export default class Me extends Component {
  static navigationOptions = {
    header: (navigation, defaultHeader) => {
      left: null
    },
  };
  render() {
    return (
      <Container>
        <Header>
          <Text style={styles.title}>我的</Text>
        </Header>
        <Content>
          <List>
            <ListItem icon 
              onPress={
                  ()=> {

                    const { navigate } =this.props.navigation;
                    navigate('Form');
                  }
                }
            >
              <Left>
                <Icon name="empire" size={30} color={'#365ce9'}/>
              </Left>
              <Body>
                <Text >radio</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon 
              onPress={
                  ()=> {

                    const { navigate } =this.props.navigation;
                    navigate('Drawer');
                  }
                }
            >
              <Left>
                <Icon name="empire" size={30} color={'#365ce9'}/>
              </Left>
              <Body>
                <Text >drawer</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('CitySelect');
                  }
                }
            >
              <Left>
                <Icon name="shopping-cart" size={30} color={'#3e00e9'}/>
              </Left>
              <Body>
                <Text>CitySelect</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('CheckBox');
                  }
                }
            >
              <Left>
                <Icon name="shopping-cart" size={30} color={'#3e00e9'}/>
              </Left>
              <Body>
                <Text>CheckBox</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('FABS');
                  }
                }
            >
              <Left>
                <Icon name="apple" size={30} color={'#009ce9'}/>
              </Left>
              <Body>
                <Text>FABS</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon 
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('FooterTab');
                  }
                }
            >
              <Left>
                <Icon name="balance-scale" size={20} color={'#3e0ce9'}/>
              </Left>
              <Body>
                <Text>FooterTab</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('Icons');
                  }
                }
            >
              <Left>
                <Icon name="download" size={30} color={'#0e9ce9'}/>
              </Left>
              <Body>
                <Text>Icons</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('ListDivider');
                  }
                }
            >
              <Left>
                <Icon name="cog" size={30} color={'#3e90e9'}/>
              </Left>
              <Body>
                <Text>ListDivider</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('ListIcon');
                  }
                }
            >
              <Left>
                <Icon name="comments" size={30} color={'#309ce9'}/>
              </Left>
              <Body>
                <Text>ListIcon</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('Search');
                  }
                }
            >
              <Left>
                <Icon name="drupal" size={30} color={'#300ce9'}/>
              </Left>
              <Body>
                <Text>Search</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('Spinner');
                  }
                }
            >
              <Left>
                <Icon name="flag-checkered" size={30} color={'#3e9009'}/>
              </Left>
              <Body>
                <Text>Spinner</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon 
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('Swipeable');
                  }
                }
            >
              <Left>
                <Icon name="empire" size={30} color={'#300ce9'}/>
              </Left>
              <Body>
                <Text>Swipeable</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
             <ListItem icon 
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('Echarts');
                  }
                }
            >
              <Left>
                <Icon name="empire" size={30} color={'#09ce90'}/>
              </Left>
              <Body>
                <Text>Echarts</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon 
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('Loadmore');
                  }
                }
            >
              <Left>
                <Icon name="empire" size={30} color={'#3e08e9'}/>
              </Left>
              <Body>
                <Text>loadmore</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon 
              onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('Modal');
                  }
                }
            >
              <Left>
                <Icon name="empire" size={30} color={'#3e23e9'}/>
              </Left>
              <Body>
                <Text >modal</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon 
              onPress={
                  ()=> {

                    const { navigate } =this.props.navigation;
                    navigate('DialogSelected');
                  }
                }
            >
              <Left>
                <Icon name="empire" size={30} color={'#365ce9'}/>
              </Left>
              <Body>
                <Text >DialogSelected</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
            <ListItem icon 
              onPress={
                  ()=> {
                    AsyncStorage.removeItem(AsyncStorageKey,
                    (err) => {
                      if(!err){
                        const { navigate } =this.props.navigation;
                        navigate('Login');
                      }else{
                        alert('退出失败！');
                      }
                    })
                    
                  }
                }
            >
              <Left>
                <Icon name="empire" size={30} color={'#3A1ce9'}/>
              </Left>
              <Body>
                <Text >logout</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    color: '#fff',
  }
})