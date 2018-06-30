import React, { Component } from 'react';
import { Image, View, StyleSheet} from 'react-native';
import { Container, Header, Tab, Tabs,ScrollableTab,Text  } from 'native-base';
import { increase , decrease,  } from '../store/actions/counter';
import { getnews  } from '../store/actions/news';
import { connect } from 'react-redux';
class Card extends Component {
  constructor(props) {
    super(props);
    this.state={
      lat: 0,
      long: 0,
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position)=> {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      })
    })
  }
  render() {
    const { onincrease,ondecrease, value, news, ongetnews} = this.props;
      return (
        <Container>
          <Header hasTabs>
            <Text style={styles.title}>新闻</Text>
          </Header>
          <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="导航1">
            <Text>{value}</Text>
            <Text onPress={onincrease}>增加</Text>
            <Text onPress={ondecrease}>减少</Text>
          </Tab>
          <Tab heading="导航2">
            <Text>{value}</Text>
          </Tab>
          <Tab heading="导航3">
          {
            news.map((item,index)=> {
              return (<Text key={index}>
                  <Text>{item.num}</Text>
                  <Text>{item.title}</Text>
                  <Text>{item.time}</Text>
              </Text>)
            })
          }
            <Text onPress={ongetnews}>获取新闻</Text>
          </Tab>
          <Tab heading="导航4">
            <Text>经度：{this.state.long}</Text>
            <Text>纬度：{this.state.lat}</Text>
          </Tab>
          <Tab heading="导航5">
            <Text>内容5</Text>
          </Tab>
        </Tabs>
        </Container>);
  }
}
const styles = StyleSheet.create({  
     container: {  
         flex: 1,  
         flexDirection: 'row',  
         justifyContent: 'center',  
         alignItems: 'center',  
         backgroundColor: '#F5FCFF',  
     }, 
     title: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        color: '#fff',
      }
 });  
const mapStateToProps = (state) => {
  // console.log(state.newsReducers)
  return {
    value: state.countReducers.num,
    news: state.newsReducers
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    ondecrease: () => dispatch(decrease(1)),
    onincrease: () => dispatch(increase(1)),
    ongetnews: () => dispatch(getnews()),
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Card)