import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { rideRequest } from '../config/firebase';

function Car({ route }) {
    const { pickup, destination } = route.params;
    const fares = {
        bike: 100,
        auto: 150,
        car: 200,
    };

    const calculateFare = async(vehicle) => {
        const { latitude: pickupLat, longitude: pickupLong } = pickup.geocodes.main;
        const { latitude: destinationLat, longitude: destinationLong } = destination.geocodes.main;

        const distance = calcCrow
        (pickupLat, 
         pickupLong, 
         destinationLat,
         destinationLong);

        const fare = fares[vehicle] * distance;
        Alert.alert('Fare', `Rs. ${fare.toFixed(2)}`);

        await rideRequest({ pickup , destination , carType: vehicle , 
            fare , timestamp:Date.now() , status: 'pending'
       })
  alert("Ride request sent , please wait for the driver!")
        
    };

    function calcCrow(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = toRad(lat2 - lat1); // deg2rad below
        var dLon = toRad(lon2 - lon1);
        var lat1 = toRad(lat1);
        var lat12 = toRad(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    function toRad(Value) {
        return Value * (Math.PI / 180);
    }

    return (
        <View style={styles.container}>
            <View style={styles.locationContainer1}>
                <Text style={styles.locationText1}> Pickup location.</Text>
                <Text>{pickup.name}, {pickup.location.address}</Text>
            </View>
            <View style={styles.locationContainer2}>
                <Text style={styles.locationText2}> Destination location.</Text>
                <Text>{destination.name}, {destination.location.address}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => calculateFare('bike')} style={styles.iconButton}>
                    <Image
                        style={styles.icon}
                       source={{uri:"https://img.freepik.com/premium-vector/sports-bike-vector-white-background_889056-69410.jpg  "}}
                    />
                    <Text style={styles.iconText}>Bike:</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => calculateFare('auto')} style={styles.iconButton}>
                    <Image
                        style={styles.icon}
                       source={{uri:"https://i.pinimg.com/736x/9e/64/92/9e649239878ccde520595d4bba09c19c.jpg "}}
                    />
                    <Text style={styles.iconText}>Auto:</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => calculateFare('car')} style={styles.iconButton}>
                    <Image
                        style={styles.icon}
                    source={{uri:"https://www.pikpng.com/pngl/m/219-2190416_red-car-closed-window-cartoon-vector-animation-car.png "}}
                    />
                    <Text style={styles.iconText}>Car: </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "rgb(242, 191, 39)",
    },
    locationContainer1: {
        marginTop: -250,
        marginBottom: 20,
        marginLeft: -150,
    },
    locationContainer2: {
        marginBottom: 20,
        marginLeft: -115,
    },
    locationText1: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    locationText2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: -3,
    },
    iconContainer: {
        flexDirection: 'row',
        marginTop: 140,
    },
    iconButton: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    icon: {
        width: 90,
        height: 70,
    },
    iconText: {
        marginTop: 5,
        fontWeight: 'bold',
    },
    Image:{
       
    }
});

export default Car;
