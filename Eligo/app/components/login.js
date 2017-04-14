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
            <View style={styles.container}>
                <Image source={require('../img/eligo_tp.png')} style={ styles.welcomeLogo }/>

                <TextInput
                    style={styles.loginInput}
                    placeholder="Username"
                />

                <TextInput
                    style={styles.loginInput}
                    placeholder="Password"
                />

                <Button
                    onPress={() => { Actions.lists(); }}
                    title="Login"
                />
            </View>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
