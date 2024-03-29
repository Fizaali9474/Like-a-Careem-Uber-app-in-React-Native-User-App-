import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "../views/Login"
import Signup from "../views/Signup"
import Dashboard from "../views/Dashboard";
import RideHistory from "../views/RideHistory";
import Pickup from "../views/Pickup";
import CarSelection from "../views/CarSelection";
import Destination from "../views/Destination";
import RideHistoryDetail from "../views/RideHistoryDetail";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Route() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Dashboard Navigator" component={DashboardNavigator} />
      <Drawer.Screen name="History Navigator" component={HistoryNavigator} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Route;


function DashboardNavigator(){
  
  return(
  
  <Stack.Navigator>
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="dashboard" component={Dashboard}/>
        <Stack.Screen name="pickup" component={Pickup} />
        <Stack.Screen name="destination" component={Destination} />
        <Stack.Screen name="vehicleSelection" component={CarSelection} />
      </Stack.Navigator> 
)}

function HistoryNavigator (){
  
  return(
  
  <Stack.Navigator>
        <Stack.Screen name="History" component={RideHistory} />
        <Stack.Screen name="Ride History Detail" component={RideHistoryDetail} />
        
      </Stack.Navigator>
     
)}

