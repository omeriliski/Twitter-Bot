import React, {useContext} from "react";
import { Alert, Modal, StyleSheet, Text, View} from "react-native";
import { Context } from "../App";
import Register from "./Register";
import Login from "./Login";

const RegisterModal = (props) => {
  const consumer=useContext(Context);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={consumer.registerModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          consumer.setRegisterModalVisible(!(consumer?.registerModalVisible));
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              {consumer?.activeModal=="login" ? <Login onPress={()=>props.onPress()}/> : <Register/> }
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  // buttonClose: {
  //   backgroundColor: "#2196F3",
  //   marginTop:10
  // },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default RegisterModal;