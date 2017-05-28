import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import {Card, Avatar, List, ListItem, Row, Col, Divider, Button} from 'react-native-elements';
import CompareColumn from './compareColumn';

import styles from '../styles'


export default class ResultsContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {loading: false};
    }

    parseRestrictions(restrictions, profile) {
        var restrictionsMapped = {};
        restrictions = restrictions.split("***")

        if (restrictions[0] == "") {
        restrictions.shift()
        }

        restrictions.map(function(r, i) {
            var item = r.split("$");
            var user = {
                idx: item[0],
                firstName: item[1],
                lastName: item[2],
                dr: item[3],
                drIng: item[4],
                foodIng: item[5]
            }

            if (!restrictionsMapped[user.idx]) {
                restrictionsMapped[user.idx] = {alerts:{}};
                restrictionsMapped[user.idx].firstName = user.firstName;
                restrictionsMapped[user.idx].lastName = user.lastName;
            }

            if (!restrictionsMapped[user.idx].alerts[user.foodIng]) {
                restrictionsMapped[user.idx].alerts[user.foodIng] = new Set();
            }

            restrictionsMapped[user.idx].alerts[user.foodIng].add(user.dr);
        });

        profile.users.forEach((u, i) => {
            if (u && !restrictionsMapped[i]) {
                restrictionsMapped[i] = {
                    firstName: u.first,
                    lastName: u.last,
                };
            }
        });

        return restrictionsMapped;
    }

    renderResultsContent() {
        var restrictions = this.props.product.Restrictions;
        var profile = this.props.profile;

        var restrictionsMapped = {};

        if (restrictions) {
            restrictionsMapped = this.parseRestrictions(restrictions, profile)
        }

        const cardDividerStyle = {height: 0}
        const cardTitleStyle = {textAlign: 'left', marginBottom: 0}
        const cardContainerStyle = {backgroundColor: '#F9F9F9', borderWidth: 0, shadowRadius: 0, shadowColor: '#F9F9F9'}


        // ***[user#]:[user's dietary restriction]:[restriction's ingredient]:[ingredient in the scanned food]***
        return(
            <ScrollView style={styles.resultsContentScroll}>
                {
                    Object.keys(restrictionsMapped).map((d,i) => (
                        <Card key={i} title={restrictionsMapped[d].firstName + " " + restrictionsMapped[d].lastName}
                            dividerStyle={cardDividerStyle} titleStyle={cardTitleStyle} containerStyle={cardContainerStyle}>

                            { restrictionsMapped[d].alerts ?
                                <View>
                                    <Text style={{color: '#EA4C2F', fontWeight: 'bold'}}>
                                        {Object.keys(restrictionsMapped[d].alerts).length} potential ingredients

                                    </Text>

                                    <Row>
                                        <Col size={3}></Col>
                                        <Col size={97}>
                                            {Object.keys(restrictionsMapped[d].alerts).map((e, i) => (
                                                <Text key={i}>{'- ' + e} ({Array.from(restrictionsMapped[d].alerts[e])})</Text>
                                            ))}
                                        </Col>
                                    </Row>
                                </View>

                                : <Text style={{color: '#44B8AE', fontWeight: 'bold'}}>No alerts detected!</Text>
                            }
                        </Card>
                    ))
                }
            </ScrollView>
        )
    }

    renderRowInfo(t0, t1, t2, s1=90, s2=10, div=false) {
        return(
            <View style={{paddingTop: 5, paddingBottom: 5}}>
                <Row>
                    <Col size={s1}>
                        <Text>
                            <Text style={{fontWeight:"bold"}}>{t0}</Text>
                            <Text>{t1}</Text>
                        </Text>
                    </Col>
                    <Col size={s2}>
                        <Text style={{textAlign: "right"}}>{t2}</Text>
                    </Col>
                </Row>
                {div && <Divider style={{ height: 1, backgroundColor: '#DDD' }} />}
            </View>
        )
    }

    renderNutritionContent() {
        const p = this.props.product;
        const dividerColor = '#333';
        const dividerSize = {
            sm: 1,
            lg: 3,
        };

        const cardDividerStyle = {height: 0};
        const cardTitleStyle = {marginBottom: 0};

        const dv = {
            totalFat: (g) => {return (g / 65 * 100).toFixed(0) + "%"},
            satFat: (g) => {return (g / 20 * 100).toFixed(0) + "%"},
            cholesterol: (g) => {return (g / 300 * 100).toFixed(0) + "%"},
            na: (g) => {return (g / 2400 * 100).toFixed(0) + "%"},
            carbs: (g) => {return (g / 300 * 100).toFixed(0) + "%"},
            protein: (g) => {return (g / 50 * 100).toFixed(0) + "%"},
        }

        return(
            <ScrollView>
                <Card title="General info" dividerStyle={cardDividerStyle} titleStyle={cardTitleStyle}>
                    <Text>Serving Size {p.nf_serving_size_qty} {p.nf_serving_size_unit} ({p.nf_serving_weight_grams != null ? p.nf_serving_weight_grams : "- "}g)</Text>
                    <Text>Servings Per Container {p.nf_servings_per_container}</Text>
                    {this.renderRowInfo('Calories ', p.nf_calories, 'Calories from Fat ' + p.nf_calories_from_fat, 45, 45, false)}

                </Card>

                <Text style={{marginTop: 10, textAlign: "center"}}>* % Daily value based off of 2000 calorie diet</Text>

                <Card title="Fat and cholesterol" dividerStyle={cardDividerStyle} titleStyle={cardTitleStyle}>
                    {this.renderRowInfo('', '', '% Daily Value*', 10, 90, true)}
                    {this.renderRowInfo('Total Fat ', p.nf_total_fat + "g", dv.totalFat(p.nf_total_fat), 90, 10, true)}
                    {this.renderRowInfo('   Saturated Fat ', p.nf_saturated_fat + "g", dv.satFat(p.nf_saturated_fat), 80, 10, true)}
                    {this.renderRowInfo('   Trans Fat ', p.nf_trans_fatty_acid + "g", "", 80, 10, true)}
                    {this.renderRowInfo('Cholesterol ', p.nf_cholesterol + "mg", dv.cholesterol(p.nf_cholesterol), 80, 10, true)}
                </Card>

                <Card title="Salts, sugars, proteins" dividerStyle={cardDividerStyle} titleStyle={cardTitleStyle}>
                    {this.renderRowInfo('', '', '% Daily Value*', 10, 90, true)}
                    {this.renderRowInfo('Sodium ', p.nf_sodium + "mg", dv.na(p.nf_sodium), 90, 10, true)}
                    {this.renderRowInfo('Total Carbohydrate ', p.nf_total_carbohydrate + "g", dv.carbs(p.nf_total_carbohydrate), 80, 10, true)}
                    {this.renderRowInfo('   Sugars ', p.nf_sugars + "g", "", 80, 10, true)}
                    {this.renderRowInfo('Protein ', p.nf_protein + "g", dv.protein(p.nf_protein), 80, 10, true)}
                </Card>
            </ScrollView>
        )
    }

    renderIngredientsContent() {
        const ingredients = this.props.product.nf_ingredient_statement.split(',');

        return(
            <ScrollView>
                <List containerStyle={{marginBottom: 20}}>
                {
                    ingredients.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.trim()}
                        hideChevron={true}
                    />
                    ))
                    }
                </List>
            </ScrollView>
        )
    }

    showHistory() {
        if (this.props.profile.history) {
            Actions.history({
                history: this.props.profile.history,
                parseBarcode: this.props.parseBarcode,
                accountId: this.props.profile.accountId,
                compare: true
                });
        } else {
            AlertIOS.alert(
                'No history'
            );
        }
    }

    renderCompareContent() {
        var restrictions = this.props.product.Restrictions;
        var profile = this.props.profile;

        var restrictionsMapped = {};

        if (restrictions) {
            restrictionsMapped = this.parseRestrictions(restrictions, profile)
        }

        if (Object.keys(this.props.compare).length != 0) {
            var restrictionsMapped2 = this.parseRestrictions(this.props.compare.Restrictions, this.props.profile);
        }

        return(
            <Row>
                <Col size={50}>
                    <CompareColumn product={this.props.product} restrictionsMapped={restrictionsMapped}></CompareColumn>
                </Col>
                <Col size={50}>
                    {restrictionsMapped2 ?
                        <View>
                            <CompareColumn product={this.props.product} restrictionsMapped={restrictionsMapped}></CompareColumn>
                            <Button title='Select other product'
                            fontSize={14}
                            buttonStyle={{height:30}}
                            backgroundColor="#F39662"
                            onPress={() => this.showHistory()}/>
                        </View>

                    : <Button title='Select product'
                        fontSize={14}
                        buttonStyle={{height:30}}
                        backgroundColor="#F39662"
                        onPress={() => this.showHistory()}/>
                    }
                </Col>
            </Row>
        )
    }

    renderContent() {
        switch(this.props.selectedTab) {
            case 0:
                return this.renderResultsContent();
            case 1:
                return this.renderNutritionContent();
            case 2:
                return this.renderIngredientsContent();
            case 3:
                return this.renderCompareContent();
            default:
                return this.renderResultsContent();
        }
    }

    render() {
        return(
            this.renderContent()
        )
    }
}