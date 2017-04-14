import React from 'react';
import { View, ScrollView, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements'

import styles from '../styles'

const myMemberProfile = [
  {
    name: 'Pika Chu',
    avatar_url: 'https://c1.staticflickr.com/9/8598/16590802906_95dd43fa9a.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Ee Vee',
    avatar_url: 'https://c1.staticflickr.com/9/8654/16609336835_4d3c09b4a8_b.jpg',
    subtitle: 'Vice Chairman'
  },
]

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

class Profile extends React.Component {
    render() {
        // const { addTodoItem, addGroceryItem } = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.profileHeaders}>My profile:</Text>
                <List containerStyle={{marginBottom: 20, marginTop: 0}}>
                    <ListItem
                        roundAvatar
                        avatar={{uri:myMemberProfile[0].avatar_url}}
                        key={1}
                        title={myMemberProfile[0].name}
                    />
                </List>

                <Text style={styles.profileHeaders}>My members:</Text>               
                <ScrollView>
                    <List containerStyle={{marginBottom: 20, marginTop: 0}}>
                        {
                            myMemberProfile.map((l, i) => (
                            <ListItem
                                roundAvatar
                                avatar={{uri:l.avatar_url}}
                                key={i}
                                title={l.name}
                                onPress={() => {console.log(l.name)}}
                            />
                            ))
                        }
                    </List>
                </ScrollView>
            </View>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);