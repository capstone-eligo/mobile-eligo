import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcomeButton: {
    padding:20,
    borderRadius:20,
    backgroundColor:'#EEE',
    marginTop:20
  },
  instructions: {
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#AAA',
    marginBottom: 5,
  },
  welcomeLogo: {
      width: 150,
      height: 150
  }
});