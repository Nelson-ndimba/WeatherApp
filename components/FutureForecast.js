import React from 'react'
import {View, Text, Image, StyleSheet} from'react-native';


const FutureForecast = () => {
    return(
<View style={{flexDirection: 'row'}}>
<FutureForecastItem />
<FutureForecastItem />
<FutureForecastItem />
</View>

    )
};

const FutureForecastItem = () => {
    let img = {uri: 'http://openweathermap.org/img/wn/10d@4x.png'}
    return(
<View style={styles.futureItemContainer}>
<Text style={styles.day} >Mon</Text>
<Image source={img} style={styles.image} />
<Text style={styles.temp}>Night - 26&#176;</Text>
<Text style={styles.temp}>Day - 36&#176;</Text>
</View>

    )
};

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
    futureItemContainer:{
        justifyContent: "center",
        flex: 1,
        backgroundColor: '#000000033',
        borderRadius: 10,
        borderColor:'#eee',
        borderWidth: 1,
        padding: 20,
        marginLeft: 10
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


})

    export default FutureForecast