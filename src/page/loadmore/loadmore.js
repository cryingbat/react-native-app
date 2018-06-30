 
 import React, { Component } from 'react';
import { Platform } from 'react-native';
import { 
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  BackHandler,
  TouchableOpacity  
} from 'react-native';
const {width, height} = Dimensions.get('window');
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Spinner } from 'native-base';
export default class Home extends Component {
    constructor(props) {
        super(props);
    //android的物理返回建的监听
    // BackHandler.addEventListener('hardwareBackPress', function() {
    //   alert('ninansakdn');
    // });
        this.state={
          dataResouse:[],
          loadmoreText: '加载更多...',
          page: 1,
          isloading: false,
        };
    }
  static navigationOptions = {
    header: (navigation, defaultHeader) => {
      left: null
    },
  };
  
  // componentWillMount(){
  //   if (Platform.OS === 'android') {
  //     BackAndroid.addEventListener('hardwareBackPress', this._onBackAndroid);
  //   }
  // }
   componentWillUnmount() {  
  //   if (Platform.OS === 'android') {  
  //     BackAndroid.removeEventListener('hardwareBackPress', this._onBackAndroid);  
  //   }  

   }  
  // onBackAndroid = () => {  
  //       const { navigator } = this.props;  
  //       const routers = navigator.getCurrentRoutes();  
  //       console.log('当前路由长度：'+routers.length);  
  //       if (routers.length > 1) {  
  //           navigator.pop();  
  //           return true;//接管默认行为  
  //       }  
  //       return false;//默认行为  
  
  //   };  
  _loadmore() {
    const url = `https://route.showapi.com/181-1?showapi_appid=30603&showapi_sign=98960666afeb4992ae91971d13494090&page=${++this.state.page}&num=20`
    const opts = {
      method: 'GET',
    } 
    fetch(url,opts).then((response)=> {
//      return response.text(); 
      return response.json();
    }).then((res)=> {
      // alert(res.showapi_res_body.newslist)
      this.setState({
        isloading: true,
        dataResouse:this.state.dataResouse.concat(res.showapi_res_body.newslist)
      })
    }).catch((err)=> {
      alert(err);
    }).done();
  }
    componentWillMount() {
        const url = `https://route.showapi.com/181-1?showapi_appid=30603&showapi_sign=98960666afeb4992ae91971d13494090&page=${this.state.page}&num=20`
        const opts = {
            method: 'GET',
        }
        fetch(url,opts).then((response)=> {
            return response.json();
        }).then((res)=> {
            this.setState({
        isloading: true,
                dataResouse:res.showapi_res_body.newslist
            })
        }).catch((err)=> {
            alert(err);
        }).done();
    }
  renderLoadingView()  
     {  
         return (<View style={styles.container} >  
                  <Spinner color='red' /> 
             </View>  
         );  
     }  
  render() {
    const dataResouse = this.state.dataResouse;
    let loadmoreText = this.state.loadmoreText;
    if(!this.state.isloading){
      return this.renderLoadingView();
    }else{
      return (
          <Container>
          <Header>
            <Text style={styles.title}>首页</Text>
          </Header>
            <Content>
              <List>
                {dataResouse.map((item,i) => {
                  return (
                      <ListItem 
                      avatar 
                      key={i} 
                      onPress={
                        ()=> {
                          const { navigate } =this.props.navigation;
                          navigate('Swiper',{id:i});
                        }
                      }>
                        <Left>
                          <Thumbnail source={{uri:item.picUrl}} style={{width:60,height:60}}/>
                        </Left>
                        <Body>
                          <Text>{item.description}</Text>
                          <Text note>{item.title}</Text>
                        </Body>
                        <Right>
                          <Text note>{item.ctime}</Text>
                        </Right>
                      </ListItem>
                  )
                })}
              </List>
              <TouchableOpacity  style={styles.cell}
                 onPress={this._loadmore.bind(this)}
              >
                <Text style={{alignItems: 'center'}}>{loadmoreText}</Text>
              </TouchableOpacity>
            </Content>
          </Container>
        );
    }
        
      }
  }
const styles=StyleSheet.create({
  container:{
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
  },
  content:{
    width:width,
    height:height,
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
  },
  cell:{
    width:width,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'#ececec',
    borderBottomWidth:1
  }
})