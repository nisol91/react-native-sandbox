import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class TabBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ciao 23</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: 'red',
  },
});
