import { React, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import DateTime from './components/DateTime'
const API_KEY = 'bc4fb8665c4eee8978ea2b0725f9f363';
import WeatherScroll from './components/WeatherScroll'
let img = require('./assets/forest_sunny.png')

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync(); // Location permission function for devices
      if (status !== 'granted') {
        fetchDataFromApi("40.7128", "-74.0060")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords, 'location')
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  //API Call to fetch Weather Data 
  const fetchDataFromApi = async (latitude, longitude) => {
    if (latitude && longitude) {
      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;
      console.log(url, 'Testing')
      // axios.get(url).then(res => res.json()).then(data => {

      // // console.log(data)
      // setData(data)
      // })
      const response = axios.get(url)
      const responseJson = await response;
      setData(responseJson.data)
      console.log(responseJson.data, 'JSON')

    }

  }

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} />
      </ImageBackground>

      <View style={{ flex: 1, backgroundColor: "#47AB2F" }}>
        <WeatherScroll weatherData={data.daily} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1.5,
    resizeMode: "top",
    justifyContent: "center"
  },
  heading: {
    fontSize: 45,
    textAlign: 'center',
    marginTop: 0,
    width: 400,
    color: "white",
    fontWeight: 'bold',
  }


});
