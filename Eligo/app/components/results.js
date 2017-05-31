import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator, AlertIOS, Image } from 'react-native';
import {Card, Button, Avatar, Grid, Row, Col, ButtonGroup} from 'react-native-elements'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ResultsContent from './resultsContent';
import { fetchBarcode, makeSuggestion } from '../actions';

import styles from '../styles';

mapStateToProps = (state) => ({
    barcodes: state.barcodeReducer.barcodes,
    product: state.barcodeReducer.product,
    compare: state.barcodeReducer.compare,
    profile: state.profileReducer.profile,
});

mapDispatchToProps = (dispatch) => ({
    fetchBarcode: (barcode, accountId, comp) => {
        dispatch(fetchBarcode(barcode, accountId, comp));
    },
    makeSuggestion: (suggestion) => {
        dispatch(makeSuggestion(suggestion));
    }
});


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: this.props.moveToTab ? this.props.moveToTab : 0}
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

        const { barcodes, product, compare, profile } = this.props;
        const buttons = ['Results', 'Nutrition', 'Ingredients', 'Compare'];
        var selectedTab = 0;

        const resultsInfoStyle = {paddingLeft: 10, paddingRight: 10};

        return(
            <View style={styles.resultsContainer}>
                <Grid>
                    <Row containerStyle={[styles.resultsInfo, resultsInfoStyle]} size={headerSectionSize}>
                        <Col size={45} containerStyle={{alignItems: 'center'}}>
                            {/*<Avatar
                                xlarge
                                rounded
                                overlayContainerStyle={{backgroundColor: '#F9F9F9'}}
                                source={require('../img/picture-placeholder.png')}
                                activeOpacity={0.7}
                            />*/}
                            <Image
                                style={{flex: 1, width: 376 / 2.75, height: 276 / 2.75, resizeMode: 'contain'}}
                                source={require('../img/picture-placeholder.png')}
                            />

                        </Col>
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
                            selectedBackgroundColor='#C6DC7E'
                            textStyle={{color:"#FFF", fontWeight:"normal"}}
                            selectedTextStyle={{color:'#FFF'}}
                            containerStyle={{height:30, backgroundColor:"#B1D25E"}}
                            innerBorderStyle={{color: '#EFF4F4'}}/>
                        </Col>
                    </Row>

                    <Row size={2}></Row>

                    <Row size={63}>
                        <ResultsContent selectedTab={this.state.selectedTab}
                            product={product}
                            profile={profile}
                            compare={compare}
                            parseBarcode={this.props.fetchBarcode}
                            makeSuggestion={this.props.makeSuggestion}/>
                    </Row>
                </Grid>

                </View>
            );
    }

    render() {
        if (Object.keys(this.props.product).length === 0) {
            return this.overlay();
        }
        else if (this.props.product.error) {
            return (
                <View>
                {AlertIOS.alert(
                    'Invalid UPC',
                    'Tap to return to scanner!',
                    [
                    {text: 'Ok', onPress: () => Actions.pop()},
                    ],
                    )}
                </View>
            )
        } else {
            return this.productLoaded();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);