import React, { Component } from 'react';
import { Image } from 'react-native';
// 路由导航
import {StackNavigator, TabBarTop, TabNavigator} from "react-navigation";
import Head from './src/common/Head'
import Swiper from './src/common/swiper'

import Slider from './src/slider'
import Login from './src/login/Login'
import Home from "./src/home/home";

import Page from "./src/page/page";
import Loadmore from './src/page/loadmore/loadmore'

import Me from "./src/me/me";
import CheckBox from './src/me/CheckBox/CheckBox'
import City from './src/me/citySelect/citySelect'
import FABS from './src/me/FABS/FABS'
import FooterTab from './src/me/FooterTab/FooterTab'
import Icons from './src/me/Icons/Icons'
import ListDivider from './src/me/ListDivider/ListDivider'
import ListIcon from './src/me/ListIcon/ListIcon'
import Search from './src/me/Search/Search'
import Spinner from './src/me/Spinner/Spinner'
import Swipeable from './src/me/Swipeable/Swipeable'
import Echarts from './src/me/Echarts/Echarts'
import Modal from './src/me/Modal/Modal'
import Form from './src/me/Form/form'
import DialogSelected from './src/me/DialogSelected/DialogSelected'
const TabRouteConfigs = {  // 表示各个页面路由配置,让导航器知道需要导航的路由对应的页面
    Home: {  // 路由名称
        screen: Home,  // 对应的路由页面
        navigationOptions: ({navigation}) => ({
            // tabBarLabel: '首页',
            title: '首页',
            tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('./src/imgs/ic_tab_strip_icon_category_selected.png') : require('./src/imgs/ic_tab_strip_icon_category.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
            )
        }),
    },
    News: {
        screen: Page,
        navigationOptions:({ navigation }) => ({  // 指定路由页面的配置选项
            // tabBarLabel: '新闻',   // 表示tab的标题
            title: '新闻',  // 可用作头部标题 headerTitle ，或者Tab标题 tabBarLabel
            tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('./src/imgs/ic_tab_strip_icon_profile_selected.png') : require('./src/imgs/ic_tab_strip_icon_profile.png')}
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
            tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('./src/imgs/ic_tab_strip_icon_feed_selected.png') : require('./src/imgs/ic_tab_strip_icon_feed.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
            ),
        },
    },
};
const TabNavigatorConfigs = {
    initialRouteName: 'Home',  // 初始显示的Tab对应的页面路由名称
    tabBarComponent: TabBarTop, // Tab选项卡组件，有 TabBarBottom 和 TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop 。
    tabBarPosition: 'bottom', // 设置选项卡的位置，在顶部或是底部，有'top'与'bottom'可选
    lazy: true,  // 是否懒加载页面
    tabBarOptions: {
        showIcon: true,
        iconStyle: { //图标样式
            width:20,
            height: 22,
        },
        style: {
            backgroundColor: '#3555ff',
            height: 58, //tab高度
        },
        labelStyle: {  
            fontSize: 12, // 文字大小  
        },
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
    }, // 在属性TabBarBottom与TabBarTop中有所不同
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
    
    CheckBox: {
        screen: CheckBox,
    },
    FABS: {
        screen: FABS,
    },
    CitySelect: {
        screen: City,
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
    Form: {
        screen: Form,
    },
    Head: {
        screen: Head,
    }
};
const StackNavigatorConfigs = {  // 表示导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
    initialRouteName: 'Slider',
    navigationOptions: {
        header: null, //隐藏导航栏
        // title: 'My First React Native App!',
        // headerStyle: {backgroundColor: '#5da8ff'},  // 设置导航头部样式
        // headerTitleStyle: {color: '#333333'},  // 设置导航头部标题样式
        cardStack: {
            gesturesEnabled: true
        },
    },
    headMode: 'screen'
};
// StackNavigator 导航组件，用来实现各个界面跳转
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);
export default { Navigator };