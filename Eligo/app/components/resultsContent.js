import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {Card, Avatar, List, ListItem, Badge, Row, Col, Divider} from 'react-native-elements'

import styles from '../styles'

export default class ResultsContent extends React.Component {
    constructor(props) {
        super(props);
    }

    renderResultsContent() {
        var restrictions = this.props.product.Restrictions;
        var restrictionsMapped = {};

        if (restrictions) {
            restrictions = restrictions.split("***")

            if (restrictions[0] == "") {
            restrictions.shift()
            }

            restrictions.map(function(r, i) {
                var item = r.split(":");
                var user = item[0];
                var userDR = item[1];
                var drIng = item[2];
                var foodIng = item[3];

                if (!restrictionsMapped[user]) {
                    restrictionsMapped[user] = {};
                }

                if (!restrictionsMapped[user][foodIng]) {
                    restrictionsMapped[user][foodIng] = new Set();
                }

                restrictionsMapped[user][foodIng].add(userDR);
            });
        }

        // ***[user#]:[user's dietary restriction]:[restriction's ingredient]:[ingredient in the scanned food]***

        return(
            <ScrollView style={styles.resultsContentScroll}>
                <Card title='Me'>
                    <Text style={{color: '#44B8AE'}}>No alerts detected!</Text>
                </Card>
                {
                    Object.keys(restrictionsMapped).map((d,i) => (
                        <Card key={i} title={d}>
                            <Text style={{color: '#EA4C2F'}}>
                                {Object.keys(restrictionsMapped[d]).length} potential ingredients
                            </Text>
                            {Object.keys(restrictionsMapped[d]).map((e, i) => (
                                <Text key={i}>  {e} ({Array.from(restrictionsMapped[d][e])})</Text>
                            ))
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
                {div && <Divider style={{ height: 1, backgroundColor: '#000' }} />}
            </View>

        )
    }

    renderNutritionContent() {
        const {product} = this.props;
        const dividerColor = '#333';
        const dividerSize = {
            sm: 1,
            lg: 3,
        };

        return(
            <ScrollView>
                <Card>
                    <Text>Serving Size {product.nf_serving_size_qty} {product.nf_serving_size_unit} ({product.nf_serving_weight_grams}g)</Text>
                    <Text>Servings Per Container {product.nf_servings_per_container}</Text>
                    <Divider style={{ height: dividerSize.lg, backgroundColor: dividerColor }} />

                    <Text>Amount Per Serving</Text>
                    {this.renderRowInfo('Calories 230', 'Calories from Fat 40', 45, 45, true)}

                    {this.renderRowInfo('', '', '% Daily Value', 10, 90, true)}
                    {this.renderRowInfo('Total Fat', '8g', '12%', 90, 10, true)}
                    {this.renderRowInfo('Saturated Fat', '1g', '5%', 80, 10, true)}

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

    renderCompareContent() {
        return(
            <ScrollView>
                <Text>Compare</Text>
            </ScrollView>
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