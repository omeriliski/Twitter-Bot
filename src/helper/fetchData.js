import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchData = async (path) => {
    try {
        const response = await axios.get(`${path}`)
        return response;
    } catch (err) {
        console.log(err)
    }
};

// ?.data?.products

export const privateFetchData = async (path) => {
    const token = await AsyncStorage.getItem('token');
    //console.log("token!!!!!!!!!",token);
    const response = await axios.get(`${path}`, {
      headers: {
        token,
      },
    });
    //console.log("response!!!!!!!",response?.data);
    return response?.data;
  };