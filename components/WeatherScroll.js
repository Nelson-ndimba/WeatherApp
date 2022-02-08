import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from'react-native';

import FutureForecast from './FutureForecast'

const WeatherScroll = ({weatherData}) => {
    return(
<ScrollView horizontal={true} style={styles.scrollView}>
<CurrentTemp1 data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
<FutureForecast data={weatherData} />
</ScrollView>

    )
};

//Component to showacse the current day weather data
const CurrentTemp1 = ({data}) => {
    if(data && data.weather){
        const img = {uri: 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png'}
        return(
            <View style={styles.currentTempContainer}>
                <Image source={img} style={styles.image} />
                <View  style={styles.otherContainer}>
                    <Text  style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                    <Text  style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
                    <Text  style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
                </View>
            </View>
    )
}else{
    return( 
        <View style={styles.currentTempContainer}>
            <Text style={styles.heading}>Data Not Found!</Text>

        </View>

    )
}
}





    const styles = StyleSheet.create({
    heading:{
        fontSize: 45,
        textAlign: 'center',
        marginTop: 0,
        width: 400,
        color: "white",
        fontWeight: 'bold',
    },
    image: {
        width: 150,
        height: 150
    },
    scrollView: {
        backgroundColor: "#47AB2F",
        padding: 30,
        flex: 0.4
    },
    currentTempContainer: {
        flexDirection: 'row',
        backgroundColor: '#000000033',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        borderColor:'#eee',
        borderWidth: 1,
        padding: 20,
        marginRight: 10
    },
    day:{
        fontSize: 20,
        color: "white",
        backgroundColor: '#3c3c44',
        padding: 10,
        textAlign: "center",
        borderRadius:50,
        fontWeight: "200",
        marginBottom:15,
        marginRight: 20
    },
    temp: {
        fontSize: 16,
        color: "white",
        fontWeight: "100",
        textAlign: "center",
        marginRight: 20
    },
    otherContaier: {
        paddingRight: 40
    }
})

    export default WeatherScroll