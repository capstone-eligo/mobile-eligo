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
    constructor(props) {
        super(props);
    }

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
                        leftIcon={{name: 'person'}}
                        key={"my profile"}
                        title={profile.users[0].first + ' ' + profile.users[0].last}
                        onLongPress={() => {console.log('long press')}}
                        onPress={() => Actions.editProfile({userIndex: 0})}/>
                </List>

                <Text style={styles.profileHeaders}>My members</Text>
                <ScrollView>
                    <List
                        containerStyle={{
                        marginBottom: 20,
                        marginTop: 0
                    }}>
                        {profile.users.map((m, i) => {
                            if (i != 0 && profile.users[i]) {
                                return (<ListItem
                                    leftIcon={{name: 'person'}}
                                    key={i}
                                    title={m.first + " " + m.last}
                                    onLongPress={() => {console.log('long press')}}
                                    onPress={() => Actions.editProfile({userIndex: i})}/>
                                )
                            }
                        })}
                        <ListItem
                            key={'addUserListItem'}
                            leftIcon={{name: 'person-add'}}
                            title="Add new member"
                            onPress={() => {Actions.addUser()}}
                        />
                    </List>
                </ScrollView>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);