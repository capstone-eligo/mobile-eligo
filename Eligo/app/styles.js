import {StyleSheet} from 'react-native';

// default ELIGO color palette
const COLOR_PALETTE = {
  teal: '#44B8AE',
  lightBlue: '#A9DBD7',
  lightGreen: '#B1D25E',
  lightOrange: '#F39662',
  red: '#EA4C2F',
  grey: '#EFF4F4'
};

export default StyleSheet.create({
  // navbar
  navBar: {
    backgroundColor: COLOR_PALETTE.teal
  },
  navBarTitle: {
    color: '#FFF'
  },
  barButtonTextStyle: {
    color: '#FFF'
  },
  barButtonIconStyle: {
    tintColor: 'rgb(255,255,255)'
  },
  rightButton: {
    fontSize: 16,
    color: '#FFF'
  },

  // containers
  container: {
    flex: 1,
    // justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 5,
    marginTop: 60,
    marginBottom: 25
  },
  editProfileContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 25,
    marginTop: 70,
    marginBottom: 25
  },
  editProfileInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    padding: 10
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PALETTE.teal,
    padding: 25
  },
  tabBarStyle: {
    borderTopWidth: .5,
    borderColor: '#b7b7b7',
    backgroundColor: 'white',
    opacity: 1
  },
  cameraContainer: {
    flex: 1,
    height: '80%',
    marginTop: 65,
    marginBottom: 50
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  // inputs
  cameraInput: {
    paddingLeft: 15,
    height: 40,
    borderRadius: 4,
    borderColor: '#E6E5ED',
    backgroundColor: '#DDD'
  },
  loginInput: {
    paddingLeft: 15,
    marginBottom: 5,
    borderRadius: 4,
    borderColor: COLOR_PALETTE.grey,
    backgroundColor: COLOR_PALETTE.grey,
    height: 40
  },

  // others
  loginLogo: {
    width: 918 / 4,
    height: 709 / 4,
    marginBottom: 20
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginBtn: {
    marginBottom: 5,
    borderRadius: 4,
    marginTop: 20,
    fontSize: 25,
    color: COLOR_PALETTE.grey
  },
  profileHeaders: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: 'bold'
  }
});