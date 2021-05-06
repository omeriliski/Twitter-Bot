
import React,{createContext, useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";

const Stack = createStackNavigator();   
export const Context = createContext();

function App() {
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [activeModal, setActiveModal] = useState("register");
  
  return (
    <Context.Provider value={{registerModalVisible,setRegisterModalVisible, activeModal, setActiveModal}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          >
          <Stack.Screen name="LoginPage" component={LoginPage}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="Statistics" component={Statistics}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

export default App;
