import React from 'react';
import { View, Text, TextInput, TouchableHighlight, ScrollView, Component } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {CheckBox, Button} from 'react-native-elements'
//import CheckBox from 'react-native-icon-checkbox';

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
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }

    handlePressCheckedBox = (checked) => {
        this.setState({
            isChecked: checked,
        });
    }

    render() {
        // console.log(this.props.barcodes);

        const { barcodes } = this.props;
        return(
            <ScrollView automaticallyAdjustContentInsets={false}>
                <View style={styles.container}>
                    <CheckBox
                       // center
                        left
                        title='Waffles'
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                        //onIconPress={() => {console.log("i was pressed")}}
                        checked={this.state.isChecked}
                        onIconPress={this.handlePressCheckedBox}

                    />

                    <CheckBox
//center
                        left
                        title='Spicy cheetos'
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                        onIconPress={() => {console.log("i was pressed")}}
                        checked={false}
                    />

                  <CheckBox
                      //  center
                        left
                        title='Bananas'
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                        onIconPress={() => {console.log("i was pressed")}}
                        checked={false}
                    />

                    <Button
                        raised
                        icon={{name: 'cached'}}
                        title='Add Item' />
                </View>
            </ScrollView>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);