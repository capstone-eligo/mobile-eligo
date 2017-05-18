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

import { setAccount } from '../actions';
import styles from '../styles'

mapStateToProps = (state) => ({ profile: state.profileReducer.profile});

mapDispatchToProps = (dispatch) => ({
    setAccount: (acc) => {
        dispatch(setAccount(acc));
    },
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spinnerActive: false};

        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
    }

    handleFacebookLogin() {
        LoginManager
            .logInWithReadPermissions(['public_profile'])
            .then((result) => {
                if (result.isCancelled) {
                    console.log('Login cancelled')
                } else {
                    this.setState({spinnerActive: true})
                    console.log('Login success with permissions: ' + result.grantedPermissions.toString())
                    AccessToken.getCurrentAccessToken().then((data) => {
                        // userID = accountID in server
                        const { accessToken, userID } = data

                        // var login = {"auth": accessToken, "accountId": userID};
                        var login = {"auth": "80833", "accountId": "tinyMikeHands"};

                        fetch('https://infinite-journey-83753.herokuapp.com/login',
                            {method:"POST", headers:{'Content-Type': 'application/json'}, body: JSON.stringify(login)})
                            .then(response => {console.log(response); return response.json()})
                            .then(json => {
                                json.accountId = userID;
                                this.props.setAccount(json);
                                this.setState({spinnerActive: false});
                                Actions.lists();
                        });
                    });
                }
            }, function (error) {
                console.log('Login fail with error: ' + error)
            })
    }

    render() {
        StatusBar.setBarStyle('light-content', true)

        return (
            <View style={styles.loginContainer}>

                <Image source={require('../img/eligo_4_tp.png')} style={styles.loginLogo}/>

                <TouchableHighlight
                    onPress={this.handleFacebookLogin}
                    style={{backgroundColor: "#3B5998", padding: 10, borderRadius:7, borderWidth: 1, borderColor: '#3B5998', paddingBottom: 10}}>
                    <Text style={{color:"#FFF"}}>Login with Facebook</Text>
                </TouchableHighlight>

                <ActivityIndicator
                    animating={this.state.spinnerActive}
                    color="#FFF"
                    size="large"/>

            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
