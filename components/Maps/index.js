import WebViewLeaflet from 'react-native-webview-leaflet';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {mapLayers} from './mapLayers';

export default class Maps extends Component {
  render() {
    return (
      <View style={styles.mapContainer}>
        <Text>mappa</Text>
        <WebViewLeaflet
          ref={component => (this.webViewLeaflet = component)}
          // Required: the map layers that will be displayed on the map. See below for a description of the map layers object
          mapLayers={mapLayers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    height: 300,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
