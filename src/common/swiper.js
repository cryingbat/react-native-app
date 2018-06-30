import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Head from './Head'
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../imgs/home_page_header_icon.png'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../imgs/home_page_header_icon.png'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('../imgs/home_page_header_icon.png'),
  },
];
export default class Swiper extends Component {
	componentDidMount() {
//		alert(this.props.navigation.state.params.id);
	}
  render() {
    return (
      <Container>
        <View>
        <Head title='详情' pushDetails = {() => {this.props.navigation.goBack();}}/>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}/我是第{this.props.navigation.state.params.id+'1'}条数据的详情页面</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}