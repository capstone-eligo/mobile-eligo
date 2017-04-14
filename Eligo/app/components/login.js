import React from 'react';
import { 
    View,
    Text,
    TextInput, 
    TouchableHighlight, 
    Image, 
    Button
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// import { addToCount } from '../actions';
import styles from '../styles'

mapStateToProps = (state) => ({ barcodes: state.barcodeReducer.barcodes });

mapDispatchToProps = (dispatch) => ({
    // addCount: (count) => {
    //     dispatch(addToCount(count));
    // },
});

class Login extends React.Component {
    render() {
        return(
            <View style={styles.loginContainer}>
                <Image source={require('../img/eligo_2_tp.png')} style={ styles.loginLogo }/>

                <TextInput
                    style={styles.loginInput}
                    placeholder="Username"
                />

                <TextInput
                    style={styles.loginInput}
                    placeholder="Password"
                />

                <Text onPress={() => { Actions.lists(); }} style={styles.loginBtn}>Login</Text>

            </View>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
