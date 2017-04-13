import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 25,
    marginTop: 50,
  },
  tabBarStyle: {
    borderTopWidth : .5,
    borderColor    : '#b7b7b7',
    backgroundColor: 'white',
    opacity        : 1
  },
  cameraContainer: {
    flex: 1,
    height: '80%',
    marginTop: 65,
    marginBottom: 50,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraInput: {
    paddingLeft: 15,
    height: 40,
    borderRadius: 4,
    borderColor: '#E6E5ED',
    backgroundColor: '#DDD',    
  },
  loginInput: {
    // borderWidth: 1,
    paddingLeft: 15,    
    borderRadius: 4,
    borderColor: '#E6E5ED',
    backgroundColor: '#F8F8F9',
    height: 40
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