import React, {createContext, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabPages from './pages/TabPages';
import LoginRegisterPage from './pages/LoginRegisterPage';

const Stack = createStackNavigator();
export const Context = createContext();

function App() {
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [activeModal, setActiveModal] = useState('register');

  return (
    <Context.Provider
      value={{
        registerModalVisible,
        setRegisterModalVisible,
        activeModal,
        setActiveModal,
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
