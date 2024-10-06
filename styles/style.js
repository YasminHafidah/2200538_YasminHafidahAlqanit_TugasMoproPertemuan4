import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
    width: 250,
    alignItems: 'center',
    borderColor:'black',
    borderWidth: 1
  },
  input: {
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 4,
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
    borderRadius: 5,
  },
   buttonContainer: {
    backgroundColor: 'gray', // tombol berwarna abu-abu
    borderRadius: 5,
    width: '100%',
    borderColor: 'black',
    borderWidth: 3
  },
  buttonText: {
    color: 'black', // teks putih agar terlihat jelas di tombol abu-abu
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  result: {
    marginTop: 10,
    fontSize: 18,
    color: 'black',
  },
});

export default styles;
