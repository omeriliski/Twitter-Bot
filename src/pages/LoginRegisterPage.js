import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import LoginRegisterModal from '../components/LoginRegisterModal';
import {Context} from '../App';
import Logo from '../components/Logo';
import {Button} from 'react-native-elements';

const LoginRegisterPage = props => {
  const consumer = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <LoginRegisterModal onPress={() => props.navigation.navigate('TabPages')}/>
      <View style={styles.loginButtonsContainer}>
        <Button
          title="Register"
          onPress={async () => {
            await consumer?.setActiveModal('register');
            await consumer?.setRegisterModalVisible(true);
            //console.log('activeModal', consumer?.activeModal);
            //console.log('registerModalVisible', consumer?.registerModalVisible);
          }}
        />
        <Button
          title="Login"
          onPress={async () => {
            await consumer?.setActiveModal('login');
            await consumer?.setRegisterModalVisible(true);
            //console.log('login page props', props);
            //console.log('activeModal', consumer?.activeModal);
            //console.log('registerModalVisible', consumer?.registerModalVisible);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginButtonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtons: {
    backgroundColor: '#1DA1F2',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default LoginRegisterPage;
