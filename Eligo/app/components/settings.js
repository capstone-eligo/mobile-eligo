import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import styles from '../styles'

mapStateToProps = (state) => ({
    //  count: state.countReducer.count 
});

mapDispatchToProps = (dispatch) => ({
    // addGroceryItem: (groceryItem) => {
    //     dispatch(addToGroceryList(groceryItem));
    // },
    // addTodoItem: (todoItem) => {
    //     dispatch(addToTodoList(todoItem));
    // },
});

class Settings extends React.Component {

    render() {
        // const { addTodoItem, addGroceryItem } = this.props;
        return(
            <View style={styles.container}>               
                <Text>Settings</Text>
            </View>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);