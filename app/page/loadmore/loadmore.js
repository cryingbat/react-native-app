import React, {  
    Component,  
} from 'react';  
  
import {  
     Image,  
     StyleSheet,  
     Text,  
     View,  
     ListView, 
     RefreshControl 
 } from 'react-native';  
const page = 1;
const total =10;
const REQUEST_URL = `https://route.showapi.com/181-1?showapi_appid=30603&showapi_sign=98960666afeb4992ae91971d13494090&page=${page}&num=20`;  
  const opts = {
      method: 'GET',
    }
var tempArray = [];
 export default class DemoProject extends Component  
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
                 <Text style={styles.text}>正在加载更多..</Text>  
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
                 <Text>Loading movies......</Text>  
             </View>  
         );  
     }  
    
     renderMovie(movie) {  
         return (  
             <View style={styles.container}>  
                 <Image  
                     source={{uri: movie.picUrl}}  
                     style={styles.thumbnail}  
                 />  
                 <View style={styles.rightContainer}>  
                     <Text style={styles.title}>{movie.title}</Text>  
                     <Text style={styles.year}>{movie.ctime}</Text>  
                 </View>  
             </View>  
         );  
     }  
 };  
  
  
 const styles = StyleSheet.create({  
     container: {  
         flex: 1,  
         flexDirection: 'row',  
         justifyContent: 'center',  
         alignItems: 'center',  
         backgroundColor: '#F5FCFF',  
     },  
     rightContainer: {  
         flex: 1,  
     },  
     title: {  
         fontSize: 20,  
         marginBottom: 8,  
         textAlign: 'center',  
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
         backgroundColor: '#F5FCFF',  
     }, 
     footer: {
        height: 40,
        alignItems: 'center',
        flexDirection : 'column'
     },
     text: {
        textAlignVertical: 'center',
        color: '#333',
     },
 });  