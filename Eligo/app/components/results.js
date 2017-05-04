import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import {Card, Button, Avatar, Grid, Row, Col, ButtonGroup} from 'react-native-elements'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ResultsContent from './resultsContent';

import styles from '../styles'

mapStateToProps = (state) => ({ barcodes: state.barcodeReducer.barcodes, product: state.barcodeReducer.product });

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
        console.log(this.props.product);

        const headerSectionSize = 20;

        const { barcodes, product } = this.props;
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
                                activeOpacity={0.7}
                            />
                        </Col>
                        <Col size={5}></Col>
                        <Col size={45} containerStyle={styles.resultsItemContainer}>
                            <Text style={styles.resultsItemName}>{product.item_name ? product.item_name : "Loading..." }</Text>
                            <Text style={styles.resultsItemName}>{product.brand_name ? product.brand_name : ""}</Text>
                        </Col>
                    </Row>

                    <Row size={5}>
                        <Col size={100}>
                            <ButtonGroup
                            onPress={(id) => this.setState({selectedTab: id})}
                            selectedIndex={this.state.selectedTab}
                            buttons={buttons}
                            buttonStyle={{color:"#000"}}
                            selectedBackgroundColor='#B1D25E'
                            textStyle={{color:"#000", fontWeight:"normal"}}
                            containerStyle={{height:30, backgroundColor:"#C2E36F"}}/>
                        </Col>
                    </Row>

                    <Row size={2}></Row>

                    <Row size={63}>
                        <ResultsContent selectedTab={this.state.selectedTab} product={product}/>
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