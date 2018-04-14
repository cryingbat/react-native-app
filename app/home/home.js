import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  TouchableHighlight  
} from 'react-native';
const {width, height} = Dimensions.get('window');
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Spinner } from 'native-base';
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state={
			dataResouse:[],
      loadmoreText: '加载更多...',
      page: 1,
      isloading: false,
		};
	}
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
              <TouchableHighlight  style={styles.cell}
                 onPress={this._loadmore.bind(this)}
              >
                <Text style={{alignItems: 'center'}}>{loadmoreText}</Text>
              </TouchableHighlight  >
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