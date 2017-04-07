import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { addToCount } from '../actions';

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
                <Text onPress={() => Actions.shoppingList()}>Login</Text>
                <Text onPress={() => Actions.mainNav()}>To Main Nav</Text>                
                <TouchableHighlight onPress={() => { addCount(count); }}>
                    <Text>Iterate count</Text>
                </TouchableHighlight>
                <Text>{ JSON.stringify(count) }</Text>
            </View>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = {
    container: {
        marginTop: 80,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxHeight: 400,
        alignItems: 'center',
    },
    textInput: {
        // alignSelf: 'stretch'
    },
    button: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
    }
};
