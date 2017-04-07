import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions, DefaultRenderer } from 'react-native-router-flux';


mapStateToProps = (state) => ({ count: state.countReducer.count });

mapDispatchToProps = (dispatch) => ({
    // addGroceryItem: (groceryItem) => {
    //     dispatch(addToGroceryList(groceryItem));
    // },
    // addTodoItem: (todoItem) => {
    //     dispatch(addToTodoList(todoItem));
    // },
});

class SideMenu extends React.Component {

    render(){
        return (
            <View>
                <Text onPress={ Actions.refresh({key: 'mainNav', open: value => !value })}>Open drawer</Text>
                <Text>Hi 2</Text>
                <Text>Hi 3</Text>
                <Text>Hi 4</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);

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
