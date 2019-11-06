import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {WebView} from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';

export default class MyMap extends Component {
  state = {
    title: 'home',
    lat: null,
    lon: null,
  };
  componentDidMount() {
    // Geolocation.getCurrentPosition(
    //   position => {
    //     this.state.lat = position.coords.latitude;
    //     this.state.lon = position.coords.longidute;
    //     console.log(position.coords.latitude);
    //   },
    //   error => {
    //     // See error code charts below.
    //     console.log(error.code, error.message);
    //   },
    //   {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    // );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.testo}>
          <Text>{this.state.title}</Text>
          <Text>sottotitolo</Text>
          <Button
            title="Go to About"
            onPress={() => this.props.navigation.navigate('MyMap')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cadetblue',
    height: '90%',
    width: '100%',
    flexDirection: 'column',
  },
  containerMap: {
    flex: 15,
  },
  testo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
