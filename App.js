/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
// 路由导航
import {StackNavigator, TabBarTop, TabNavigator} from "react-navigation";
import Slider from './app/slider'
import Login from './app/login/Login'
import Swiper from './app/page/swiper/swiper'
import Home from "./app/home/home";

import Page from "./app/page/page";
import Loadmore from './app/page/loadmore/loadmore'

import Me from "./app/me/me";
import CardList from './app/me/CardList/cardList'
import CheckBox from './app/me/CheckBox/CheckBox'
import FABS from './app/me/FABS/FABS'
import FooterTab from './app/me/FooterTab/FooterTab'
import Icons from './app/me/Icons/Icons'
import ListDivider from './app/me/ListDivider/ListDivider'
import ListIcon from './app/me/ListIcon/ListIcon'
import Search from './app/me/Search/Search'
import Spinner from './app/me/Spinner/Spinner'
import Swipeable from './app/me/Swipeable/Swipeable'
import Echarts from './app/me/Echarts/Echarts'
import Modal from './app/me/Modal/Modal'
import DialogSelected from './app/me/DialogSelected/DialogSelected'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Navigator/>
    );
  }
}

const TabRouteConfigs = {  // 表示各个页面路由配置,让导航器知道需要导航的路由对应的页面
    Home: {  // 路由名称
        screen: Home,  // 对应的路由页面
        navigationOptions: ({navigation}) => ({
            // tabBarLabel: '首页',
            title: '首页',
        }),
    },
    News: {
        screen: Page,
        navigationOptions:({ navigation }) => ({  // 指定路由页面的配置选项
            // tabBarLabel: '新闻',   // 表示tab的标题
            title: '新闻',  // 可用作头部标题 headerTitle ，或者Tab标题 tabBarLabel
            tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('./app/imgs/ic_tab_strip_icon_feed_selected.png') : require('./app/imgs/ic_tab_strip_icon_feed.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
            )
        }),
    }
    ,
    My: {
        screen: Me,
        navigationOptions: {
            // tabBarLabel: '我的',
            title: '我的',
        },
    },
};
const TabNavigatorConfigs = {
    initialRouteName: 'Home',  // 初始显示的Tab对应的页面路由名称
    tabBarComponent: TabBarTop, // Tab选项卡组件，有 TabBarBottom 和 TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop 。
    tabBarPosition: 'bottom', // 设置选项卡的位置，在顶部或是底部，有'top'与'bottom'可选
    lazy: true,  // 是否懒加载页面
    tabBarOptions: {}, // 在属性TabBarBottom与TabBarTop中有所不同
    showIcon: true
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
const StackRouteConfigs = {
    Slider: {
        screen: Slider,
    },
    Tab: {
        screen: Tab,
    },
    Login: {
      screen: Login
    },
    Swiper: {
        screen: Swiper,
    },
    CardList: {
        screen: CardList,
    },
    CheckBox: {
        screen: CheckBox,
    },
    FABS: {
        screen: FABS,
    },
    FooterTab: {
        screen: FooterTab,
    },
    Icons: {
        screen: Icons,
    },
    ListDivider: {
        screen: ListDivider,
    },
     ListIcon: {
        screen: ListIcon,
    },
     Search: {
        screen: Search,
    },
     Spinner: {
        screen: Spinner,
    },
     Swipeable: {
        screen: Swipeable,
    },
    Echarts: {
        screen: Echarts,
    },
    Loadmore: {
        screen: Loadmore,
    },
    Modal: {
        screen: Modal,
    },
     DialogSelected: {
        screen: DialogSelected,
    },

    
};
const StackNavigatorConfigs = {  // 表示导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
    initialRouteName: 'Slider',
    navigationOptions: {
        title: 'My First React Native App!',
        headerStyle: {backgroundColor: '#5da8ff'},  // 设置导航头部样式
        headerTitleStyle: {color: '#333333'},  // 设置导航头部标题样式
        cardStack: {
            gesturesEnabled: true
        },
    },
    headMode: 'screen'
};
// StackNavigator 导航组件，用来实现各个界面跳转
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);