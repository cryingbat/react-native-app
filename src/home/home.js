import React, {  
    Component,  
} from 'react';  
import Head from '../common/Head'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Spinner } from 'native-base';
import {  
     Image,  
     StyleSheet,  
     Text,  
     View,  
     ListView, 
     RefreshControl 
 } from 'react-native';  
import { connect } from "react-redux";

const styles = StyleSheet.create({  
     container: {  
         flex: 1,  
         marginBottom: 20,
         flexDirection: 'row',  
         justifyContent: 'center',  
         alignItems: 'center',  
     },  
     rightContainer: {  
         flex: 1,  
     },
     titl: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        color: '#fff',
     },  
     title: {  
         fontSize: 15,  
         marginBottom: 8,  
         textAlign: 'left',  
     },  
     item: {
        
     },
     year: {  
         textAlign: 'center',  
     },  
     thumbnail: {  
         width: 80,  
         height: 81,  
     },  
     listView: {  
         paddingTop: 20,  
         marginBottom: 60,
         backgroundColor: '#F5FCFF',  
     }, 
     footer: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
     },
     text: {
        textAlignVertical: 'center',
        color: '#333',
     },
});


const page = 1;
const total =10;
const REQUEST_URL = `https://route.showapi.com/181-1?showapi_appid=30603&showapi_sign=98960666afeb4992ae91971d13494090&page=${page}&num=20`;  
const opts = {
  method: 'GET',
}
var tempArray = [];
 class home extends Component  
 {  
     constructor(props) {  
         super(props);  
         this.state = {  
             dataSource: new ListView.DataSource({  
                 rowHasChanged: (row1, row2) => row1 !== row2,  
             }),  
             loaded: false, 
             isRefreshing: false, 
             noPage: 0,
         };  
     }  
     componentDidMount(){  
         this.fetchData(); 
     }  
  
     fetchData() {  
         fetch(REQUEST_URL, opts)  
             .then((response) => response.json())  
             .then((responseData) => {  
                tempArray= responseData.showapi_res_body.newslist;
                 this.setState({  
                     dataSource: this.state.dataSource.cloneWithRows(responseData.showapi_res_body.newslist),  
                     loaded: true,  
                 });  
             }).catch((err)=>{  
                   alert(err);
             })  
             .done();  
     }  
     render() {  
         if (!this.state.loaded) {  
             return this.renderLoadingView();  
         }  
         return (  
            <View>
            <Header>
                <Text style={styles.titl}>首页</Text>
            </Header>
             <ListView
                refreshControl={
                 <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    tintColor="#ff0000"
                    title="加载中..."
                    titleColor="#00ff00"
                    colors={['#ff0000', '#00ff00', '#0000ff']}
                    progressBackgroundColor="#ffffff"
                  />
                }  
                 dataSource={this.state.dataSource}  
                 renderRow={this.renderMovie.bind(this)}
                 renderFooter={this._rendFooter.bind(this)}
                 onEndReached={this._EndReached.bind(this)}  
                 onEndReachedThreshold={20}
                 style={styles.listView}
             />  
            </View>
         );  
     }  
     _onRefresh() {
        if(page>total){
            alert('没有更多数据啦！')
        }else{
             if(this.state.loaded){
            ++page;
            fetch(`https://route.showapi.com/181-1?showapi_appid=30603&showapi_sign=98960666afeb4992ae91971d13494090&page=${page}&num=20`, opts)  
                 .then((response) => response.json())  
                 .then((responseData) => {
                    tempArray = responseData.showapi_res_body.newslist.concat(tempArray);
                     this.setState({  
                         dataSource: this.state.dataSource.cloneWithRows(tempArray),  
                         loaded: true,  
                     });  
                 }).catch((err)=>{  
                       alert(err);
                 })  
                 .done(); 
                 } 
        }
     }
     _EndReached() {
       if(page>total){
            this.setState({
                noPage : 1,
            })
        }else{
            if(this.state.loaded){
                page ++;
                fetch(`https://route.showapi.com/181-1?showapi_appid=30603&showapi_sign=98960666afeb4992ae91971d13494090&page=${page}&num=20`, opts)  
                     .then((response) => response.json())  
                     .then((responseData) => {
                         tempArray = tempArray.concat(responseData.showapi_res_body.newslist);
                         setTimeout(() => {
                            this.setState({  
                             dataSource: this.state.dataSource.cloneWithRows(tempArray),  
                             loaded: true,  
                         }); 
                         }, 2000)
                          
                     }).catch((err)=>{  
                           alert(err);
                     })  
                     .done();  
            }
            
         }
     }
     _rendFooter() {
        if(this.state.noPage !== 1){
            return (<View style={styles.footer} >  
                 <Spinner color='#999' fontSize='15'/> 
             </View>)
        }

        if(this.state.noPage === 1){
             return (<View style={styles.footer} >  
                 <Text style={styles.text}>没有更多数据啦！</Text>  
             </View>)
        }
        
     }   
     renderLoadingView()  
     {  
         return (<View style={styles.container} >  
                  <Spinner color='red' /> 
             </View>  
         ); 
     }  
    
     renderMovie(item,sectionId, index) { 

         return (
             <ListItem 
              avatar
              style={styles.item}
              onPress={
                ()=> {
                  const { navigate } =this.props.navigation;
                  navigate('Swiper',{id:index});
                }
              } 
              >
                <Left>
                  <Thumbnail source={{uri:item.picUrl}} style={{width:60,height:60}}/>
                </Left>
                <Body>
                  <Text note style={{fontWeight:'600'}}>{item.description}</Text>
                  <Text note>{item.title}</Text>
                </Body>
                <Right>
                  <Text note>{item.ctime}</Text>
                </Right>
              </ListItem>
         );  
     }  
 };  
const mapStateToProps = (state) => {
    console.log(state)
    return {
        value: state.news
    }
}

 export default connect(
    mapStateToProps
 )(home)
 