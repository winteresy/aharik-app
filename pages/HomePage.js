import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Logo from '../components/Atoms/A_Logo.js';
import Button from '../components/Atoms/A_Button.js';



const HomePage = ({ navigation }) => {
  const handleRegistrationPress = () => {
    navigation.navigate('Registration');
  }

  const handleLoginPress = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.homepage}>
      <Logo />
      <View style={styles.containerhome}>
        <Text style={styles.containerhometext}>Гуляй со своей собакой в компании</Text>
        <Button title="Зарегистрироваться" onPress={handleRegistrationPress}  style={styles.buttonRegister}/>
        <Button title="Зайти" onPress={handleLoginPress} style={styles.buttonLogin}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    homepage: {
        flex: 1,
        backgroundColor: "#2E2E2E",
        alignItems: "center",
    },
    containerhome: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      height: 218,
      borderRadius: 25,
      marginTop: 180,
    },
    containerhometext: {
      fontFamily: 'Nomerok-Mono',
    },
    buttonRegister: {
        backgroundColor: "#FF9344",
    },
    buttonLogin: {
      backgroundColor: "#fff",
  }
})

export default HomePage;