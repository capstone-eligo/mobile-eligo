import React from 'react';
import { View, Text, TextInput, TouchableHighlight, ScrollView, Component } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {CheckBox, Button} from 'react-native-elements'

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
            checked: false,
        };
    }

    _toggleItem = () => {
        this.setState({checked: !this.state.checked});
    }

    render() {
        const { barcodes } = this.props;

        const textStyling = {fontWeight: 'normal'};
        return(
            <ScrollView automaticallyAdjustContentInsets={false}>
                <View style={styles.container}>
                    <CheckBox
                        left
                        title='Waffles'
                        textStyle={textStyling}
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                        checked={this.state.checked}
                        onPress={() => {this._toggleItem()}}
                        onIconPress={() => {this._toggleItem()}}
                    />

                    <CheckBox
                        left
                        title='Spicy cheetos'
                        textStyle={textStyling}
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                        onIconPress={() => {console.log("i was pressed")}}
                        checked={false}
                    />

                    <CheckBox
                        left
                        title='Bananas'
                        textStyle={textStyling}
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                        onIconPress={() => {console.log("i was pressed")}}
                        checked={false}
                    />

                    <Button
                        icon={{name: 'add'}}
                        buttonStyle={{backgroundColor: '#B1D25E'}}
                        title='Add' />
                </View>
            </ScrollView>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);