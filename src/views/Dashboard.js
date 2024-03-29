import React from 'react';
import { Button, Text, View,StyleSheet, ImageBackground, Image } from 'react-native';

function Dashboard({ navigation }) {
  return (
  /* <ImageBackground
    source={{uri:"https://promiad.com/wp-content/uploads/2017/05/Careem-Makes-an-addition-to-the-Business-Class-Category-by-Introducing-Business-Plus.jpg  "}}
    >*/
       <View style={styles.container}>
      <Button style={styles.btn}
        title="pickup"
        onPress={() => navigation.navigate('pickup')}
      />
      <Text  style={styles.text}>Book Your Rides!
      </Text>
      <Image source={{uri:"https://promiad.com/wp-content/uploads/2017/05/Careem-Makes-an-addition-to-the-Business-Class-Category-by-Introducing-Business-Plus.jpg "}}>
      </Image>
    </View>
   /*  </ImageBackground>*/
   
  );

}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

   container:{
    textAlign:"center",
    color:"green"
   },

  btn:{
    backgroundColor:"green"
  }
  });