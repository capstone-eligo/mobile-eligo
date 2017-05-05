import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {List, ListItem} from 'react-native-elements'

import styles from '../styles'

mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    members: state.profileReducer.members
});

mapDispatchToProps = (dispatch) => ({
    // addGroceryItem: (groceryItem) => { dispatch(addToGroceryList(groceryItem));
    // }, addTodoItem: (todoItem) => { dispatch(addToTodoList(todoItem)); },
});

class Profiles extends React.Component {
    render() {
        const { profile, members } = this.props;

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
                        avatar={{uri: profile.avatar_url}}
                        key={1}
                        title={profile.name}
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
                        {members.map((l, i) => (<ListItem
                            roundAvatar
                            avatar={{uri: l.avatar_url}}
                            key={i}
                            title={l.name}
                            onLongPress={() => {console.log('long press')}}
                            onPress={() => {console.log('regular press')}}/>
                        ))}
                        <ListItem
                            key={members.length + 1}
                            avatar={{uri: "https://c1.staticflickr.com/8/7128/8162953475_25501b86a9.jpg"}}
                            roundAvatar
                            title="Add new member"
                            onPress={() => {console.log("create new")}}
                        />
                    </List>
                </ScrollView>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);