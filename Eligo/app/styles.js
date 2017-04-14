import { StyleSheet } from 'react-native';

// default ELIGO color palette
const COLOR_PALETTE = {};

export default StyleSheet.create({
  // containers
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

  // inputs
  cameraInput: {
    paddingLeft: 15,
    height: 40,
    borderRadius: 4,
    borderColor: '#E6E5ED',
    backgroundColor: '#DDD',    
  },
  loginInput: {
    paddingLeft: 15,    
    borderRadius: 4,
    borderColor: '#E6E5ED',
    backgroundColor: '#F8F8F9',
    height: 40
  },

  // others
  welcomeLogo: {
    width: 150,
    height: 150
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },


});