import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import InstaGram from './screens/in';
import FaceBook from './screens/fb';
import { render } from 'react-dom';


export default class App extends React.Component{
  render(){
    return(
        <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
    FaceBook:{Screen:FaceBook},
 InstaGram:{Screen:InstaGram}
});

const AppContainer = createAppContainer(TabNavigator);