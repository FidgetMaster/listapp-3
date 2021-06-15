import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Homescreen from '../screens/homescreen';
import Listscreen from '../screens/listscreen';
export const AppStackNavigator = createStackNavigator({
    Homescreen:{screen:Homescreen,
    navigationOptions:{headerShown:false}},
    Listscreen:{screen:Listscreen,
    navigationOptions:{headerShown:false}}
},
{initialRouteName:'Homescreen'})