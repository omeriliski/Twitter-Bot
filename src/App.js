import React, { createContext, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabPages from './pages/TabPages';
import LoginRegisterPage from './pages/LoginRegisterPage';
import axios from 'axios';
// import twitter, {auth} from 'react-native-twitter';
// import twit from 'twit'

const Stack = createStackNavigator();
export const Context = createContext();

function App() {
  const port="5001";
  
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [activeModal, setActiveModal] = useState('register');
  const [activeUser, setActiveUser] = useState();
  const bearerToken="AAAAAAAAAAAAAAAAAAAAABH19QAAAAAAw5wDFd8VzVeW%2FPio2nC03gA33UA%3D0BhhGzUyPnQu3Ci0VuoGvPsaNyxRBZZi3yNc0DDSn7mk3ckIyZ"

  const twit=((text)=>{
    axios.post(`http://192.168.0.123:${port}/api/twitapi/twit`, {"text":text})
    .then(response => {
      console.log('twit response :>> ', response);
    })
    .catch((err)=>{
      console.log('twit err :>> ', err);
    })
  })

  const followPopular=(arr=>{
    axios.post(`http://192.168.0.123:${port}/api/twitapi/followPopular`, {"arr":arr})
    .then(response => {
      console.log('followPopular response :>> ', response);
    })
    .catch(err=>{
      console.log('followPopular err :>> ', err);
    })
  })
  // const getUserByScreenName = (screenName)=>{
  //   axios.get(`https://api.twitter.com/1.1/users/show.json?screen_name=${screenName}`,{
  //     headers:{
  //       "Authorization":`bearer ${bearerToken}`
  //     }
  //   })
  //   .then((res)=>{
  //     console.log('res :>> ', res.data.screen_name,res.data.id);
  //   })
  //   .catch(err=>{
  //     console.log('err :>> ', err);
  //   })
  // }

  // getUserByScreenName("akinerciyes1")




  // const tokens={
  //   consumerKey:'Nj15lkjs1eLHoChMeH9ZGErc6',
  //   consumerSecret:'opymeMuZnkvF428RLYWkeYC7g7ijv1TEyRvIjhp0WTvFv8iRUx',
  //   accessToken: '1096359974362640384-uG7YBLbM2G4iCgvuI3e1xGxiElXj4A',
  //   accessTokenSecret:'EAOyxHuR316RuEgKYN4FvuUeZW7SxxseX4BdN2u5efgEQ'
  // }
  // auth(tokens, "twitterkit-Nj15lkjs1eLHoChMeH9ZGErc6://")
  // const client = twitter(tokens)
  // const {rest, stream} = twitter(tokens);
  // rest.get('https://api.twitter.com/2/users/by/username/@ademyarslan')
  // .then((res)=>{
  //   console.log(res)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })


  // const init=()=>{
  //   console.log("activeUser!!!!!!!!!!!",activeUser)
  //   let T = new twit({
  //     consumer_key:         'Nj15lkjs1eLHoChMeH9ZGErc6',
  //     consumer_secret:      'opymeMuZnkvF428RLYWkeYC7g7ijv1TEyRvIjhp0WTvFv8iRUx',
  //     access_token:         '1096359974362640384-uG7YBLbM2G4iCgvuI3e1xGxiElXj4A',
  //     access_token_secret:  'EAOyxHuR316RuEgKYN4FvuUeZW7SxxseX4BdN2u5efgEQ',
  //     // AAAAAAAAAAAAAAAAAAAAABH19QAAAAAAw5wDFd8VzVeW%2FPio2nC03gA33UA%3D0BhhGzUyPnQu3Ci0VuoGvPsaNyxRBZZi3yNc0DDSn7mk3ckIyZ
  //     //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  //     strictSSL:            true,     // optional - requires SSL certificates to be valid.
  //   });
  // }

  const getProfile = async () => {
    console.log("*********************get profile started *****************************");
    
    console.log("---------get profile data------",response);

  }




// const getUserId=()=>{
//   axios.get(`https://api.twitter.com/2/users?ids=2244994945,6253282`)
//   .then((res)=>{
//     console.log('getUserId res :>> ', res);
//   })
//   .catch((err)=>{
//     console.log('err :>> ', err);
//   })
// }
  return (
    <Context.Provider
      value={{
        registerModalVisible, setRegisterModalVisible,
        activeModal, setActiveModal,
        activeUser, setActiveUser,
        getProfile,port,followPopular
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