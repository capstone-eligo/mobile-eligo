import React from 'react';
import { View, Text, TextInput, TouchableHighlight, ScrollView, Component } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {CheckBox, Button} from 'react-native-elements'

import { updateShoppingList } from '../actions';

import styles from '../styles'

mapStateToProps = (state) => ({
    shopList: state.profileReducer.shopList,
    profile: state.profileReducer.profile
});

mapDispatchToProps = (dispatch) => ({
    updateShoppingList: (accountId, shopList) => {
        dispatch(updateShoppingList(accountId, shopList));
    },
});

class ShoppingListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        }
    }

    toggleItem = () => {
        this.setState({checked: !this.state.checked});
        this.props.removeShopItem(this.props.name);
    }    

    render() {
        const textStyling = {fontWeight: 'normal'};

        return(
            <CheckBox
                key={this.props.name}
                left
                title={this.props.name}
                textStyle={textStyling}
                checkedIcon='check-square-o'
                uncheckedIcon='square-o'
                checked={this.state.checked}
                onPress={() => {this.toggleItem()}}
                onIconPress={() => {this.toggleItem()}}
            />
        )        

    }
}

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    removeShopItem = (listKey) => {
        var updatedList = this.props.profile.list;
        delete updatedList[listKey];

        this.props.updateShoppingList(this.props.profile.accountId, updatedList);
    }

    addShopItem = () => {
        var updatedList = this.props.profile.list;
        updatedList[this.state.text] = {};
        updatedList[this.state.text]["checked"] = false;

        this.props.updateShoppingList(this.props.profile.accountId, updatedList);
        this.setState({text: ''});
    }

    render() {
        const { list } = this.props.profile;
        const inputStyle = {
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 10,
            backgroundColor: '#F9F9F9',
            padding: 5,
            height: 40
        }

        return(
            <View style={styles.container}>
                <TextInput
                    style={inputStyle}
                    returnKeyType="done"
                    onSubmitEditing={() => {this.addShopItem()}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder="Add new item"    
                />

                <ScrollView>
                    {list ? Object.keys(list).map((d, i) => (
                        <ShoppingListItem key={d} name={d} removeShopItem={this.removeShopItem}></ShoppingListItem>
                    )) : <Text></Text>} 

                </ScrollView>
            </View>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);