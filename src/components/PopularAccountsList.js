/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Avatar, Input, Button } from 'react-native-elements'
import { Context } from '../App';
import { Formik } from 'formik';
import { privatePostData } from "../helper/postData";

const PopularAccountsList = () => {

  const consumer = useContext(Context);

  const setPopularAccounts = async (value) => {

    const tempActiveUser = consumer?.activeUser;
    tempActiveUser.popularAccountsList.push(value);
    consumer.setActiveUser(tempActiveUser);
    console.log("---------------tempActiveUser-----------",tempActiveUser);
    
    await privatePostData(`http://192.168.0.123:${consumer.port}/api/user/${consumer?.activeUser._id}/update_user`, consumer.activeUser)
      .then(response => {
        console.log("Account Saved", response);
        //consumer.getProfile();
        consumer?.setActiveUser(response);
      })
      .catch(err => {
        console.log("Keys save error", err);
      });
  }

  useEffect(() => {
    // consumer.getProfile();
  }, [])
  return (
    <Formik
      initialValues={{
        popularAccount: ""
      }}
    >
      {formikProps => (
        <View>
          <Input
            placeholder="@username"
            name="popularAccount"
            onChangeText={formikProps.handleChange('popularAccount')}
            value={formikProps.values.popularAccount}
          />
          <Button
            title="Save"
            buttonStyle={styles.saveButton}
            onPress={() =>{
              setPopularAccounts(formikProps.values.popularAccount)
              formikProps.values.popularAccount=""
            }} 
              
          />
          {
            consumer?.activeUser?.popularAccountsList?.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <Avatar rounded source={{ uri: l.avatar_url }} />
                <ListItem.Content>
                  <ListItem.Title>{l}</ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          }
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    width: 150,
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default PopularAccountsList;
