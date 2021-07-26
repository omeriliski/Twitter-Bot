import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const privatPostData = async (path, data) => { //*
  // const token = localStorage.getItem("token");
  try {
    const token = await AsyncStorage.getItem('token')
  } catch(e) {
    console.log(e);
  }
  console.log("data Post!!!!!!", data);
  const response = await axios.post(`${path}`, data, {
    headers: {
      token,
    },
  });
  console.log("response.data",response.data)
  return response?.data;
};


export const postData = async (path, values) => { //*
  // const token = localStorage.getItem("token");
  const response = await axios.post(`${path}`, values);
  console.log("response.data",response.data)
  return response?.data;
};