import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

mapStateToProps = (state) => ({ count: state.countReducer.count });

mapDispatchToProps = (dispatch) => ({
    // addGroceryItem: (groceryItem) => {
    //     dispatch(addToGroceryList(groceryItem));
    // },
    // addTodoItem: (todoItem) => {
    //     dispatch(addToTodoList(todoItem));
    // },
});

class ShoppingList extends React.Component {

    render() {
        // const { addTodoItem, addGroceryItem } = this.props;
        console.log(this.props.count);
        
        const { count } = this.props;
        return(
            <View style={styles.container}>
                <Text onPress={() => Actions.shoppingList()}>Shopping List</Text>
                <Text>{ JSON.stringify(count) }</Text>
            </View>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

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
