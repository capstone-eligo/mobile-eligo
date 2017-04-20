import React from 'react';
import { View, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {CheckBox} from 'react-native-elements'

import styles from '../styles'


mapStateToProps = (state) => ({ barcodes: state.barcodeReducer.barcodes });

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
        console.log(this.props.barcodes);
        
        const { barcodes } = this.props;
        return(              
            <ScrollView automaticallyAdjustContentInsets={false}>
                <View style={styles.container}>
                    <CheckBox
                        center
                        left
                        title='Waffles'
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                        onIconPress={() => {console.log("i was pressed")}}
                        checked={false}
                    />

                    <CheckBox
                        center
                        left
                        title='Spicy cheetos'
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                        onIconPress={() => {console.log("i was pressed")}}
                        checked={false}
                    />
                </View>
            </ScrollView>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);