import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Image,
    Button,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {LoginManager, AccessToken} from 'react-native-fbsdk'

// import { addToCount } from '../actions';
import styles from '../styles'

mapStateToProps = (state) => ({barcodes: state.barcodeReducer.barcodes});

mapDispatchToProps = (dispatch) => ({
    // addCount: (count) => {     dispatch(addToCount(count)); },
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spinnerActive: false};
    }

    handleFacebookLogin() {
        LoginManager
            .logInWithReadPermissions(['public_profile'])
            .then(function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled')
                } else {
                    () => this.setState({spinnerActive: true})
                    console.log('Login success with permissions: ' + result.grantedPermissions.toString())
                    AccessToken.getCurrentAccessToken().then((data) => {
                        const { accessToken } = data
                        console.log(data);
                        () => this.setState({spinnerActive: false})
                        Actions.lists();
                    });
                }
            }, function (error) {
                console.log('Login fail with error: ' + error)
            })
    }

    render() {
        // StatusBar.setBarStyle('light-content', true)

        return (
            <View style={styles.loginContainer}>

                <Image source={require('../img/eligo_4_tp.png')} style={styles.loginLogo}/>
                {/*<LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={(error, result) => {
                    if (error) {
                        alert("Login failed with error: " + result.error);
                    } else if (result.isCancelled) {
                        alert("Login was cancelled");
                    } else {
                        alert("Login was successful with permissions: " + result.grantedPermissions)
                    }
                }}
                    onLogoutFinished={() => alert("User logged out")}/>*/}
                <TouchableHighlight
                    onPress={this.handleFacebookLogin}
                    style={{backgroundColor: "#3B5998", padding: 10, borderRadius:7, borderWidth: 1, borderColor: '#3B5998', paddingBottom: 10}}>
                    <Text style={{color:"#FFF"}}>Login with Facebook</Text>
                </TouchableHighlight>

                <ActivityIndicator
                    animating={false}
                    color="#FFF"
                    size="large"/>

            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
