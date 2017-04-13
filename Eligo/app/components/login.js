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

import { addToCount } from '../actions';
import styles from '../styles'

mapStateToProps = (state) => ({ count: state.countReducer.count });

mapDispatchToProps = (dispatch) => ({
    addCount: (count) => {
        dispatch(addToCount(count));
    },
});

class Login extends React.Component {
    state = {
        count: {},
    }
    
    render() {
        const { count, addCount } = this.props;
        // const { count } = this.state;
        
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
                         
                <TouchableHighlight onPress={() => { addCount(5); }}>
                    <Text>Iterate count</Text>
                </TouchableHighlight>
            </View>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
