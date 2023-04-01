import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
    return (
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
    );
  };

  const styles = StyleSheet.create({
    logo: {
        marginTop: 40,
        width: 149,
        height: 58,
    },
})


  
  export default Logo;