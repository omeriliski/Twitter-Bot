import React, { createContext, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabPages from './pages/TabPages';
import LoginRegisterPage from './pages/LoginRegisterPage';
import {Twit} from "twit";  

const Stack = createStackNavigator();
export const Context = createContext();

function App() {
  const port="5001";
  
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [activeModal, setActiveModal] = useState('register');
  const [activeUser, setActiveUser] = useState();

  const init=()=>{
    console.log("activeUser!!!!!!!!!!!",activeUser)
    var T = new Twitter({
      consumer_key: activeUser.apiKey,
      consumer_secret: activeUser.apiSecretKey,
      access_token: activeUser.accessToken,
      access_token_secret: accessTokenSecret,
      timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
      strictSSL: true,     // optional - requires SSL certificates to be valid.
    })
  };
  const getProfile = async () => {
    console.log("*********************get profile started *****************************");
    
    console.log("---------get profile data------",response);

    // init();
  }

  
  return (
    <Context.Provider
      value={{
        registerModalVisible, setRegisterModalVisible,
        activeModal, setActiveModal,
        activeUser, setActiveUser,
        getProfile,port
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LoginRegisterPage" component={LoginRegisterPage} />
          <Stack.Screen name="TabPages" component={TabPages} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

export default App;
