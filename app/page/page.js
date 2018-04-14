import React, { Component } from 'react';
import { Image, View, StyleSheet} from 'react-native';
import { Container, Header, Content,Spinner, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardShowcaseExample extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataResouse:[],
      isloading: false,
    };
  }
  componentWillMount() {

  const opts = {
      method: 'GET',
    }
    const url = `https://route.showapi.com/181-1?showapi_appid=30603&showapi_sign=98960666afeb4992ae91971d13494090&page=1&num=20`
    
    fetch(url,opts).then((response)=> {
//      return response.text();
      return response.json();
    }).then((res)=> {
      // alert(res.showapi_res_body.newslist)
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
    if(!this.state.isloading){
      return this.renderLoadingView();
    }else{
      return (
        <Container>
          <Content>
          {this.state.dataResouse.map((item,i) => {
            return (
            <Card style={{flex: 0}} key={i}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: item.picUrl}} />
                  <Body>
                    <Text>{item.description}</Text>
                    <Text note>{item.ctime}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: item.picUrl}} style={{height: 200, width: 300, flex: 1}}/>
                  <Text>
                    {item.title}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="logo-github" />
                    <Text>1,926 stars</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
             )
            })}
          </Content>
        </Container>);
    }
    
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
 });  