import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';

export default class MyMap extends Component {
  state = {
    title: 'open street',
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
    var titolo = this.state.title;
    return (
      <View style={styles.container}>
        <View style={styles.testo}>
          <Text>{this.state.title}</Text>
        </View>
        <View style={styles.containerMap}>
          <WebView
            originWhitelist={['*']}
            injectedJavaScript={`
              var mymap= L.map('mapid').setView([44.8, 10.33], 16);

              L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1Ijoibmlzb2w5MSIsImEiOiJjazBjaWRvbTIwMWpmM2hvMDhlYWhhZGV0In0.wyRaVw6FXdw6g3wp3t9FNQ'
              }).addTo(mymap);

              function onMapClick(e) {
                alert("You clicked the map at " + e.latlng);
              }
              mymap.on('click', onMapClick);
              true
            `}
            source={{
              html: `
              <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
              integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
              crossorigin=""/>
              <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
              integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
              crossorigin=""></script>
              <div id="mapid"></div>

              <div id="mapid"></div>
              <style>#mapid { height: 100%; }</style>
              true
              `,
            }}
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
