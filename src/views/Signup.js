import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import { register } from "../config/firebase";

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 /* const [age, setAge] = useState("");*/

  const handleSignup = async () => {
    try {
      await register({ email, password, username });
      navigation.navigate("dashboard");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
         uri:"https://upload-cdn.careem.com/cplus_rebranded_1_b17ac75ce7.png "
        }}
        style={styles.background}
        resizeMode="contain"
        
      >
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
       {/* <TextInput
          style={styles.input}
          placeholder="age"
          type="text"
          secureTextEntry
          value={age}
          onChangeText={(e) => setAge(value)}
      />*/}
        <Button title="Signup" onPress={handleSignup} styles={styles.btn} />
        <Text style={styles.text} onPress={() => navigation.navigate("login")}>
          <Text style={styles.work}>Already Have An Account ?
          </Text>
          Login with Careem:
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height:"100%",
    
    
  },
  container: {
    flex: 1,
    
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
    opacity: 0.8,
    fontStyle:"normal",
  

  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color:"black",
    backgroundColor:"green"
  },
  work:{
    fontWeight:"normal",
    color:"green",
    backgroundColor:"black"
  },

  btn:{
 backgroundColor:"green"

  },
  /*background:{
    height:"10"
  }*/

});

export default Signup; 


