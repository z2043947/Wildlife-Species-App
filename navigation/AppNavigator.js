import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Platform, Text, View, Image, Dimensions } from 'react-native';
import ClassificationInsectScreen from '../screens/ClassificationInsectScreen'
import BugFactSheets from '../screens/BugFactsheets'
import SnailFactSheets from '../screens/SnailFactsheets'
import SpiderFactSheets from '../screens/SpiderFactsheets'
import BeetleFactSheets from '../screens/BeetleFactsheets'
import LandingScreen from '../screens/LandingScreen'
import AboutScreen from '../screens/AboutScreen';
import BugFactsheetScreen from '../screens/BugFactsheetScreen'
import BeetleFactsheetScreen from '../screens/BeetleFactsheetScreen'
import SnailFactsheetScreen from '../screens/SnailFactsheetScreen'
import SpiderFactsheetScreen from '../screens/SpiderFactsheetScreen'

const screenHeight = Math.round(Dimensions.get('window').height);
const bottomIcon =
    <View style={{ width: '90%', height: '100%', flexDirection: 'row', justifyContent: 'center' }}>
            <Image style={{ width: 100, height: 40 }} source={require('../assets/unsw.png')} />
   </View>;


const LandingNavigation = createStackNavigator({
    Land: LandingScreen,
    //About: AboutScreen
}, {})
/*
    defaultNavigationOptions: {


        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '' : '',
            height: screenHeight * 0.12

            // backgroundColor: '#f4511e',
        },
        headerTintColor: Platform.OS === 'android' ? 'red' : 'red',
        // backgroundColor: '#f4511e',
        headerTitleStyle: {
            // fontWeight: 'bold',
            fontSize: 1
        },
    },
})*/

const LandingNavigator = createBottomTabNavigator({

    Landings: {
        screen: LandingNavigation,
        navigationOptions: {
            // style:{
            //     width:1000,height:1000,
            // },
            tabBarIcon: tabInfo => {
                console.log()
                return (
                    bottomIcon
                );
            },
            style: {
                padding: 10,
                height: 80,
            },
            tabBarColor: 'blue',
            tabBarLabel: () => {
                console.log()
                return (
                    <View></View>
                )
            }
        }
    },
}, {
})


const InsectNavigation = createStackNavigator({
    InsectScreen: ClassificationInsectScreen,
}, {})

const InsectNavigator = createBottomTabNavigator({
    InsNV: {
        screen: InsectNavigation,
        navigationOptions: {
            // style:{
            //     width:1000,height:1000,
            // },
            tabBarIcon: tabInfo => {
                console.log()
                return (
                    bottomIcon
                );
            },
            style: {
                padding: 10,
                height: 80,
            },
            tabBarColor: 'blue',
            tabBarLabel: () => {
                console.log()
                return (
                    <View></View>
                )
            }
        }
    }
}, {})

const BugFactNavigation = createStackNavigator({
    BugScreen: BugFactSheets,
}, {})

const BugFactNavigator = createBottomTabNavigator({
    BugNV: {
        screen: BugFactNavigation,
        navigationOptions: {
            // style:{
            //     width:1000,height:1000,
            // },
            tabBarIcon: tabInfo => {
                console.log()
                return (
                    bottomIcon
                );
            },
            style: {
                padding: 10,
                height: 80,
            },
            tabBarColor: 'blue',
            tabBarLabel: () => {
                console.log()
                return (
                    <View></View>
                )
            }
        }
    }
}, {})

const BeetleFactNavigation = createStackNavigator({
    BeetleScreen: BeetleFactSheets,
}, {})

const BeetleFactNavigator = createBottomTabNavigator({
    BeetleNV: {
        screen: BeetleFactNavigation,
        navigationOptions: {
            // style:{
            //     width:1000,height:1000,
            // },
            tabBarIcon: tabInfo => {
                console.log()
                return (
                    bottomIcon
                );
            },
            style: {
                padding: 10,
                height: 80,
            },
            tabBarColor: 'blue',
            tabBarLabel: () => {
                console.log()
                return (
                    <View></View>
                )
            }
        }
    }
}, {})

const SnailFactNavigation = createStackNavigator({
    SnailScreen: SnailFactSheets,
}, {})

const SnailFactNavigator = createBottomTabNavigator({
    SnailNV: {
        screen: SnailFactNavigation,
        navigationOptions: {
            // style:{
            //     width:1000,height:1000,
            // },
            tabBarIcon: tabInfo => {
                console.log()
                return (
                    bottomIcon
                );
            },
            style: {
                padding: 10,
                height: 80,
            },
            tabBarColor: 'blue',
            tabBarLabel: () => {
                console.log()
                return (
                    <View></View>
                )
            }
        }
    }
}, {})

const SpiderFactNavigation = createStackNavigator({
    SpiderScreen: SpiderFactSheets,
}, {})

const SpiderFactNavigator = createBottomTabNavigator({
    SpiderNV: {
        screen: SpiderFactNavigation,
        navigationOptions: {
            // style:{
            //     width:1000,height:1000,
            // },
            tabBarIcon: tabInfo => {
                console.log()
                return (
                    bottomIcon
                );
            },
            style: {
                padding: 10,
                height: 80,
            },
            tabBarColor: 'blue',
            tabBarLabel: () => {
                console.log()
                return (
                    <View></View>
                )
            }
        }
    }
}, {})



/*
const AppNavigator = createSwitchNavigator({

    Home: LandingNavigation,
    AI: InsectNavigation,
    Bug: BugFactNavigation,
    Beetle: BeetleFactNavigation,
    Snail: SnailFactNavigation,
    Spider: SpiderFactNavigation

})
*/
const AppNavigator = createSwitchNavigator({

    Home: LandingScreen,
    About: AboutScreen,
    AI: ClassificationInsectScreen,
    Bug: BugFactSheets,
    Beetle: BeetleFactSheets,
    Snail: SnailFactSheets,
    Spider: SpiderFactSheets,
    BugFacts: BugFactsheetScreen,
    BeetleFacts: BeetleFactsheetScreen,
    SnailFacts: SnailFactsheetScreen,
    SpiderFacts: SpiderFactsheetScreen

})

export default createAppContainer(AppNavigator) 