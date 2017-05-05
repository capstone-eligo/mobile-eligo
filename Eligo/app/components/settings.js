import React from 'react';
import { View, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {List, ListItem} from 'react-native-elements'


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

/*class Settings extends React.Component {

    render() {
        const settingItems = [
            {
                title: "Terms and agreement",
                location: () => {Actions.terms()}
            },
            {
                title: "Privacy policy",
                location: "./app/components/privacy"
            },
            {
                title: "Logout",
                location: "TBA"
            },
        ];
        
        return(
            <View style={styles.container}>
                <ScrollView>
                    <List
                        containerStyle={{
                        marginBottom: 20,
                        marginTop: 0
                    }}>
                        {settingItems.map((l, i) => (<ListItem
                            key={i}
                            title={l.title}
                            onPress={() => {settingItems[i].location.call(this)}}/>//{console.log("pressed")}}/>
                        ))}
                    </List>
                </ScrollView>
            </View>
        )
    }
} */

class Settings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <List
                        containerStyle={{
                        marginBottom: 20,
                        marginTop: 0
                    }}>
                        <ListItem
                            key={1}
                            title="Terms and agreement"
                            onPress={() => {Actions.terms()}}/>
                        <ListItem
                            key={2}
                            title="Privacy"
                            onPress={() => {Actions.privacy()}}/>
                        <ListItem
                            key={3}
                            title="Logout"
                            onPress={() => console.log("Logout")}/>
                    </List>
                </ScrollView>
            </View>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings);