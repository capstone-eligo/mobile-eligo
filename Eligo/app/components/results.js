import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import {Card, Button, Avatar, Grid, Row, Col, ButtonGroup} from 'react-native-elements'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ResultsContent from './resultsContent';

import styles from '../styles'

mapStateToProps = (state) => ({
    barcodes: state.barcodeReducer.barcodes,
    product: state.barcodeReducer.product,
    profile: state.profileReducer.profile,
});

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

    overlay() {
        return(
            <View style={styles.overlayContainer}>
                <ActivityIndicator
                    animating={true}
                    color="#44B8AE"
                    size="large"/>
            </View>
        )
    }

    productLoaded() {
        const headerSectionSize = 20;

        const { barcodes, product, profile } = this.props;
        const buttons = ['Results', 'Nutrition', 'Ingredients', 'Compare'];
        var selectedTab = 0;

        return(
            <View style={styles.resultsContainer}>
                <Grid>
                    <Row containerStyle={styles.resultsInfo} size={headerSectionSize}>
                        <Col size={40}>
                            <Avatar
                                xlarge
                                rounded
                                overlayContainerStyle={{backgroundColor: 'white'}}
                                source={require('../img/picture-placeholder.png')}
                                activeOpacity={0.7}
                            />
                        </Col>
                        <Col size={5}></Col>
                        <Col size={55} containerStyle={styles.resultsItemContainer}>
                            <Text style={styles.resultsItemName}>{product.item_name ? product.item_name : "N/A" }</Text>
                            <Text style={styles.resultsItemName}>{product.brand_name ? "(" + product.brand_name + ")": "N/A"}</Text>
                        </Col>
                    </Row>

                    <Row size={2}></Row>

                    <Row size={5}>
                        <Col size={100}>
                            <ButtonGroup
                            onPress={(id) => this.setState({selectedTab: id})}
                            selectedIndex={this.state.selectedTab}
                            buttons={buttons}
                            buttonStyle={{color:"#000"}}
                            selectedBackgroundColor='#C6DC7E'
                            textStyle={{color:"#000", fontWeight:"normal"}}
                            containerStyle={{height:30, backgroundColor:"#B1D25E"}}/>
                        </Col>
                    </Row>

                    <Row size={2}></Row>

                    <Row size={63}>
                        <ResultsContent selectedTab={this.state.selectedTab} product={product} profile={profile}/>
                    </Row>
                </Grid>

                </View>
            );
    }

    render() {
        if (Object.keys(this.props.product).length === 0) {
            return this.overlay();
        } else {
            return this.productLoaded();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);