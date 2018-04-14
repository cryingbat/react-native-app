import React, { Component } from 'react';
import { Image } from  'react-native'
import { Container, Content, List, ListItem, Text, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Me extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem icon
               onPress={
                  ()=> {
                    const { navigate } =this.props.navigation;
                    navigate('CardList');
                  }
                }
            >
              <Left>
                <Icon name="align-justify" size={30} color={'#3e9ce9'}/>
              </Left>
              <Body>
                <Text>CardList</Text>
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
                <Icon name="shopping-cart" size={30} color={'#3e9ce9'}/>
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
                <Icon name="apple" size={30} color={'#3e9ce9'}/>
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
                <Icon name="balance-scale" size={20} color={'#3e9ce9'}/>
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
                <Icon name="download" size={30} color={'#3e9ce9'}/>
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
                <Icon name="cog" size={30} color={'#3e9ce9'}/>
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
                <Icon name="comments" size={30} color={'#3e9ce9'}/>
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
                <Icon name="drupal" size={30} color={'#3e9ce9'}/>
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
                <Icon name="flag-checkered" size={30} color={'#3e9ce9'}/>
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
                <Icon name="empire" size={30} color={'#3e9ce9'}/>
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
                <Icon name="empire" size={30} color={'#3e9ce9'}/>
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
                <Icon name="empire" size={30} color={'#3e9ce9'}/>
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
                <Icon name="empire" size={30} color={'#3e9ce9'}/>
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
                <Icon name="empire" size={30} color={'#3e9ce9'}/>
              </Left>
              <Body>
                <Text >DialogSelected</Text>
              </Body>
              <Right>
                <Icon name="angle-right" size={30} color={'#000'}/>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}