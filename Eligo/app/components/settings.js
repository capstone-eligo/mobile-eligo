import React from 'react';
import { View, Text, TextInput, TouchableHighlight, ScrollView, AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {List, ListItem} from 'react-native-elements';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

import { clearProfile } from '../actions';

import styles from '../styles'

mapStateToProps = (state) => ({
     profile: state.profileReducer.profile
});

mapDispatchToProps = (dispatch) => ({
    clearProfile: () => {
        dispatch(clearProfile);
    },
});

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    _deleteProfile = () => {
        var data = {"accountId": this.props.profile.accountId};

        fetch('https://infinite-journey-83753.herokuapp.com/deleteAccount',
            {method:"POST", headers:{'Content-Type': 'application/json'}, body: JSON.stringify(data)})
            .then(response => {
                if (response.status == 200) {
                    this.props.clearProfile();
                    LoginManager.logOut();
                    setTimeout(() => {Actions.pop(); Actions.login();}, 250);
                }
            });
    }

    render() {
        return (
            <View style={[styles.container, {marginTop: 58}]}>
                <ScrollView>
                    <List
                        containerStyle={{
                        marginBottom: 20,
                        marginTop: 0
                    }}>
                        <ListItem
                            key={'terms_item'}
                            title="Terms and agreement"
                            leftIcon={{name: 'flag'}}
                            onPress={() => {Actions.terms()}}/>
                        <ListItem
                            key={'privacy_item'}
                            title="Privacy"
                            leftIcon={{name: 'lock'}}
                            onPress={() => {Actions.privacy()}}/>
                         <ListItem
                            key={'acknowledgements_item'}
                            title="Acknowledgements"
                            leftIcon={{name: 'favorite'}}
                            onPress={() => {Actions.acknowledgements()}}/>
                        <ListItem
                            key={'dr_item'}
                            title="Dietary restrictions (allergy-based)"
                            leftIcon={{name: 'local-dining'}}
                            onPress={() => {Actions.drList()}}/>
                    </List>

                    <List
                        containerStyle={{
                        marginBottom: 20,
                        marginTop: 0
                    }}>
                        <ListItem
                            key={'delete_account'}
                            title="Delete account"
                            leftIcon={{name: 'cancel'}}
                            onPress={() => {AlertIOS.prompt(
                                'Are you sure? :(',
                                'Press ok to delete account',
                                [
                                {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                                {text: 'OK', onPress: () => {
                                    this._deleteProfile();
                                }},
                                ],
                                'default'
                                );
                            }}/>
                    </List>

                    <List
                        containerStyle={{
                        marginBottom: 20,
                        marginTop: 0
                    }}>
                         <ListItem
                            key={'logout_item'}
                            title="Logout"
                            leftIcon={{name: 'exit-to-app'}}
                            onPress={() => {
                                LoginManager.logOut();
                                setTimeout(() => {Actions.pop(); Actions.login({type: "reset"});}, 250);
                                }}/>
                    </List>
                </ScrollView>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);