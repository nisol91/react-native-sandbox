import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TabBar from './components/TabBar';
import MyMap from './components/MyMap';
import MyMap_thunder from './components/MyMap_thunder';

import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return <AppContainer style={styles.container} />;
  }
}
// const bottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: Home,
//     },
//     MyMap: {
//       screen: MyMap,
//     },
//     MyMap_thunder: {
//       screen: MyMap_thunder,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    MyMap: {
      screen: MyMap,
    },
    MyMap_thunder: {
      screen: MyMap_thunder,
    },
    // Maps: {
    //   screen: Maps,
    // },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#22252a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
