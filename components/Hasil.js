import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/style'; 

const Hasil = (props) => {
  return (
    <View>
      {props.luas !== null ? (
        <Text style={styles.luas}>Luas Persegi Panjang: {props.luas}</Text>
      ) : (
        <Text style={styles.luas}></Text>
      )}
    </View>
  );
};

export default Hasil;
