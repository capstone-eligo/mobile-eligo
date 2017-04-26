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

class Settings extends React.Component {

    render() {
        const settingItems = [
            {
                title: "Terms and agreement",
                location: "TBA"
            },
            {
                title: "Privacy policy",
                location: "TBA"
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
                            onPress={() => {console.log("pressed")}}/>
                        ))}
                    </List>
                </ScrollView>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);