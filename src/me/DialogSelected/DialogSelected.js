import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import Head from '../../common/Head'
export default class dialogSelected extends Component {
  showActionSheet () {
    this.ActionSheet.show()
  }
  render() {
    return (
      <View>
        <Head title='dialog' pushDetails = {() => {this.props.navigation.goBack();}}/>
        <Text 
        	onPress={this.showActionSheet.bind(this)}
        >点我选择水果</Text>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'请选择喜欢的水果?'}
          options={['苹果', '香蕉', '删除']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => { alert(index) }}
        />
      </View>
    )
  }
}