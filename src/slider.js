import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import Tab from './home/home'
import Swiper from 'react-native-swiper';
 
var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn: {
    borderWidth: 1,
    borderColor: "#a1a24a",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 50,
    borderRadius: 5,
    alignItems: 'flex-end',
    backgroundColor: '#a1a24a',
    color: "#fff"
  }
})
const AsyncStorageKey = "AS_";
export default class Slider extends Component{
 constructor(props) {
  super(props);
 }
 ComponentDidMount() {
  AsyncStorage.getItem(AsyncStorageKey, (err, text) => {
      if(text === null){
        console.log('没存呢！');
      }else{
        alert(text);
        this.props.navigation.navigate('Tab');
        // this.props.navigation.navigate('Tab');
      }
    })
 }
  toLogin () {
    this.props.navigation.navigate('Login');
  }

  static navigationOptions = {
    header: (navigation, defaultHeader) => {
      visible: false  
    },
  };
  renderSlider() {
    return (
        <Tab />
      )
  }
  render () {
    return (
      <Swiper 
        style={styles.wrapper} 
        showsButtons={true}
        loop={false}
        showsButtons={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
            <TouchableOpacity 
              onPress={this.toLogin.bind(this)}
            >
               <Text style={styles.btn}>
                马上体验
               </Text>
            </TouchableOpacity>
         
        </View>
      </Swiper>
    )
  }
}