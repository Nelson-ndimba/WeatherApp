import { StatusBar } from 'expo-status-bar';
import {React, useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import DateTime from './components/DateTime'
import WeatherScroll from './components/WeatherScroll'


let img = require('./assets/forest_sunny.png')
const API_KEY ='bc4fb8665c4eee8978ea2b0725f9f363';


export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {
        
      let {latitude, longitude } = success.coords;
      fetchDataFromApi(latitude, longitude)

  }, (err) => {
    if(err){
      fetchDataFromApi("29.0852° ", "26.1596° ")

    }

  })
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=
      ${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&
      appid=${API_KEY}`).then(res => res.json()).then(data => {

      console.log(data)
      setData(data)
    
      })
  }

  return (
    
    <View style={styles.container}>
      <ImageBackground source={img } style={styles.image}>
        <DateTime /> 
      </ImageBackground>

      <View style={{flex:1, backgroundColor:"#47AB2F"}}>
      <WeatherScroll />
      </View>
    </View>
  )
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image:{
    flex:1.5,
    resizeMode:"top",
    justifyContent:"center"
  },
  heading:{
    fontSize: 45,
    textAlign: 'center',
    marginTop: 0,
    width: 400,
    color: "white",
    fontWeight: 'bold',
}
  

});
