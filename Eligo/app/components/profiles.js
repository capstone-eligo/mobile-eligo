import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {List, ListItem} from 'react-native-elements'

import styles from '../styles'

mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
});

mapDispatchToProps = (dispatch) => ({
    // addGroceryItem: (groceryItem) => { dispatch(addToGroceryList(groceryItem));
    // }, addTodoItem: (todoItem) => { dispatch(addToTodoList(todoItem)); },
});

class Profiles extends React.Component {
    render() {
        const { profile } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.profileHeaders}>My profile</Text>
                <List
                    containerStyle={{
                    marginBottom: 20,
                    marginTop: 0
                }}>
                    <ListItem
                        roundAvatar
                        avatar={{uri: "https://c1.staticflickr.com/9/8598/16590802906_95dd43fa9a.jpg"}}
                        key={"my profile"}
                        title={profile.users[0].first + ' ' + profile.users[0].last}
                        onLongPress={() => {console.log('long press')}}
                        onPress={() => Actions.editProfile()}/>
                </List>

                <Text style={styles.profileHeaders}>My members</Text>
                <ScrollView>
                    <List
                        containerStyle={{
                        marginBottom: 20,
                        marginTop: 0
                    }}>
                        {profile.users.map((m, i) => {
                            if (i != 0) {
                                return (<ListItem
                                    roundAvatar
                                    avatar={{uri: "https://c1.staticflickr.com/9/8654/16609336835_4d3c09b4a8_b.jpg"}}
                                    key={i}
                                    title={m.first + " " + m.last}
                                    onLongPress={() => {console.log('long press')}}
                                    onPress={() => {console.log('regular press')}}/>
                                )
                            }
                        })}
                        <ListItem
                            key={profile.users.length + 1}
                            avatar={{uri: "https://c1.staticflickr.com/8/7128/8162953475_25501b86a9.jpg"}}
                            roundAvatar
                            title="Add new member"
                            onPress={Actions.addUser}
                        />
                    </List>
                </ScrollView>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);