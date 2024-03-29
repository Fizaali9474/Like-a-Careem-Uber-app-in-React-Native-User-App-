/*import React from 'react';
import { Button, Text, View,StyleSheet } from 'react-native';

function History({ navigation }) {
  return (
    <View style={styles.container}>
      <Button 
        title="Go to Dashboard"
        onPress={() => navigation.navigate('dashboard')}
      />
      <Text>Ride History</Text>
    </View>
  );
}

export default History;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });*/

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getingRides } from "../config/firebase";
import { collectionGroup } from "firebase/firestore";

function RideHistory() {
  const [history, setHistory] = useState([]);
 

  useEffect(() => {
    allRides();
  }, []);

  const allRides = async () => {
    const rides = await getingRides();
    setHistory(rides);
    console.log(rides, "<=rides");
  };

  if (!history) {
    return (
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 100,
          }}
        >
          Loading...
        </Text>
      </View>
    );
  }

// console.log(history , 'history')

  return (
    <ScrollView style={styles.View}>
      {history.map((item, index) => {
      // console.log(item , '<=item')
        return (
          // <View />
          <View key={index} style={styles.container}>
            <Text style={styles.title}>PickUp : {item.pickup.name}</Text>
            <Text style={styles.title}>
              Destination : {item.destination.name}
            </Text>
            <Text style={styles.title}>Vehicle : {item.carType}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  View: {
    // flex: 1,
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "pink",
    borderWidth: 2,
    borderRadius: 2,
    margin: 12,
    padding: 3,
    shadowOffset: { width: -5, height: 5 },
    shadowColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 25,
  },
  title: {
    fontSize: 20,
   /* fontWeight: "bold",*/
    color: "#240",
    marginBottom: 10,
   /* textAlign: "center",*/
  },
  subtitle: {
    fontSize: 20,
    color: "#666",
    textAlign: "center",
  },
});
export default RideHistory;