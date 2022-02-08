import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment-timezone'

//Component to populate fututere weather forecast
const FutureForecast = ({ data }) => {
    console.log(data, 'Future')
    return (
        <View style={{ flexDirection: 'row' }}>
            {
                data && data.length > 0 ?

                    data.map((data, idx) => (

                        idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />
                    ))

                    :

                    <View />
            }
        </View>

    )
};

const FutureForecastItem = ({forecastItem}) => {
    // console.log(props, 'Item')
    let img = { uri: "http://openweathermap.org/img/wn/" + forecastItem.weather[0].icon + "@2x.png" }
    return (
        <View style={styles.futureItemContainer}>
            <Text style={styles.day} >{moment(forecastItem.dt * 1000).format('ddd')}</Text>
            <Image source={img} style={styles.image} />
            <Text style={styles.temp}>Night - {forecastItem.temp.night}&#176;</Text>
            <Text style={styles.temp}>Day - {forecastItem.temp.day}&#176;</Text>
        </View>

    )
};


const styles = StyleSheet.create({
    heading: {
        fontSize: 45,
        textAlign: 'center',
        marginTop: 0,
        width: 400,
        color: "white",
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100
    },
    futureItemContainer: {
        justifyContent: "center",
        flex: 1,
        backgroundColor: 'black',
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1,
        padding: 20,
        marginLeft: 10
    },
    day: {
        fontSize: 20,
        color: "white",
        backgroundColor: '#3c3c44',
        padding: 10,
        textAlign: "center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15,
        marginRight: 20
    },
    temp: {
        fontSize: 16,
        color: "white",
        fontWeight: "100",
        textAlign: "center",
        marginRight: 20
    },


})

export default FutureForecast