import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {Card, Button, Avatar, Grid, Row, Col, ButtonGroup} from 'react-native-elements'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ResultsContent from './resultsContent';

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

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 0}
    }

    render() {
        console.log(this.props.barcodes);
        const headerSectionSize = 20;

        const { barcodes } = this.props;
        const buttons = ['Results', 'Nutrition', 'Ingredients', 'Compare'];
        var selectedTab = 0;

        return(
            <View style={styles.resultsContainer}>
                <Grid>
                    <Row containerStyle={styles.resultsInfo} size={headerSectionSize}>
                        <Col size={50}>
                            <Avatar
                                xlarge
                                rounded
                                source={{uri: "https://static01.nyt.com/images/2013/01/13/magazine/13wmt/13wmt-jumbo-v3.jpg"}}
                                onPress={(text) => console.log('test')}
                                activeOpacity={0.7}
                            />
                        </Col>
                        <Col size={5}></Col>
                        <Col size={45}>
                            <Text>Product Name</Text>
                            <Text>Product Details</Text>
                        </Col>
                    </Row>

                    <Row size={5}>
                        <Col size={100}>
                            <ButtonGroup
                            onPress={(id) => this.setState({selectedTab: id})}
                            selectedIndex={this.state.selectedTab}
                            buttons={buttons}
                            containerStyle={{height:30}}/>
                        </Col>
                    </Row>

                    <Row size={2}></Row>

                    <Row size={63}>
                        <ResultsContent selectedTab={this.state.selectedTab}/>
                    </Row>
                </Grid>

                </View>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);