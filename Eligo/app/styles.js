import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  cameraContainer: {
    flex: 1,
    // height: '80%'
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
  },
  icon: {
    width: 24,
    height: 24
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});