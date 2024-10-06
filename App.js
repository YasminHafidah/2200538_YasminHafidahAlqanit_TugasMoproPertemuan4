import React from 'react';
import { View } from 'react-native';
import  HitungLuasPersegiPanjang from './components/HitungLuasPersegiPanjang'; 

import styles from './styles/style'; 

export default function App() {
  return (
    <View style={styles.container}>
      <HitungLuasPersegiPanjang />
    </View>
  );
}
