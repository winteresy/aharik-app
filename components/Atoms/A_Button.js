import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.button]}>
      <Text style={[styles.buttontext]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        width: "90%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 25,
    },
    buttontext: {
        textTransform: "uppercase",
        color: "#FFF",
        fontSize: 16,
        lineHeight: 18,
    },
})

export default Button;