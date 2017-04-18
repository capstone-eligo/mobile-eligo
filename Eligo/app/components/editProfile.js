import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {List, ListItem, Avatar, Grid, Row, Col} from 'react-native-elements'

import styles from '../styles'

mapStateToProps = (state) => ({
    //  count: state.countReducer.count
});

mapDispatchToProps = (dispatch) => ({
    // addGroceryItem: (groceryItem) => { dispatch(addToGroceryList(groceryItem));
    // }, addTodoItem: (todoItem) => { dispatch(addToTodoList(todoItem)); },
});

class EditProfile extends React.Component {

    render() {
        const headerSectionSize = 20;
        const drSize = (100 - headerSectionSize) / 2;
        // const { addTodoItem, addGroceryItem } = this.props;
        return (
            <View style={styles.editProfileContainer}>
                <Grid>
                    <Row size={headerSectionSize}>
                        <Col size={25}>
                            <Avatar
                                large
                                rounded
                                source={{uri: "https://c1.staticflickr.com/9/8598/16590802906_95dd43fa9a.jpg"}}
                                onPress={() => console.log("Picture clicked")}
                                activeOpacity={0.7}
                            />
                        </Col>

                        <Col size={5}></Col>

                        <Col size={70}>
                            <TextInput
                                style={styles.loginInput}
                                placeholder="Name"
                            />
                            <TextInput
                                style={styles.loginInput}
                                placeholder="Email"
                                autoCapitalize="none"                                
                            />
                        </Col>
                    </Row>
                    <Row size={drSize}>
                        <Text>Dietary restrictions (allergy-based)</Text>
                    </Row>
                    <Row size={drSize}>
                        <Text>Dietary restrictions (non-allergy based)</Text>
                    </Row>
                </Grid>
              
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);