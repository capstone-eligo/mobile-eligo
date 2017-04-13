import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import styles from '../styles'

mapStateToProps = (state) => ({ count: state.countReducer.count });

mapDispatchToProps = (dispatch) => ({
    // addGroceryItem: (groceryItem) => {
    //     dispatch(addToGroceryList(groceryItem));
    // },
    // addTodoItem: (todoItem) => {
    //     dispatch(addToTodoList(todoItem));
    // },
});

class Scanner extends React.Component {

    render() {
        // const { addTodoItem, addGroceryItem } = this.props;
        console.log(this.props.count);
        
        const { count } = this.props;
        return(
            <View style={styles.container}>               
                <Text>{ JSON.stringify(count) }</Text>
            </View>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);