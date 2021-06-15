import React from 'react';
import { Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Homescreen from './screens/homescreen';
import Formscreen from './screens/formscreen';
import { AppStackNavigator } from './components/appStackNavigator';

export default function App() {
  return (
    <AppContainer/>
  )
}
const TabNavigator = createBottomTabNavigator({
  Homescreen:{screen:AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("./assets/homeicon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Lists",
      tabBarOptions: {activeTintColor: "#8c6cd8", inactiveTintColor: "#cece7b"}
    }},
  Formscreen:{screen:Formscreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("./assets/formicon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Create List",
      tabBarOptions: {activeTintColor: "#8c6cd8", inactiveTintColor: "#cece7b"}
    }}
})

const AppContainer = createAppContainer(TabNavigator)

