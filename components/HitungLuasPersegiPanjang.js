import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Hasil from './Hasil'; 
import styles from '../styles/style'; 

const HitungLuasPersegiPanjang = () => {
  const [panjang, setPanjang] = useState('');
  const [lebar, setLebar] = useState('');
  const [luas, setLuas] = useState(null);

  const HitungLuas = () => {
    const luas = parseFloat(panjang) * parseFloat(lebar);
    if (!isNaN(luas)) {
      setLuas(luas);
    } else {
      setLuas(null);
    }
  };

  return (
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        placeholder="Masukkan panjang"
        keyboardType="numeric"
        value={panjang}
        onChangeText={(text) => setPanjang(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Masukkan lebar"
        keyboardType="numeric"
        value={lebar}
        onChangeText={(text) => setLebar(text)}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={HitungLuas}>
        <Text style={styles.buttonText}>Hitung</Text>
      </TouchableOpacity>

      <Hasil luas={luas} />
    </View>
  );
};

export default HitungLuasPersegiPanjang;
