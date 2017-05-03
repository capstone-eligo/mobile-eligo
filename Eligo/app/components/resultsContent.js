import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {Card, Button, Avatar, Grid, Row, Col, ButtonGroup, List, ListItem} from 'react-native-elements'

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
                {
                    Object.keys(restrictionsMapped).map((d,i) => (
                        <Card key={i} title={d}>
                            {Object.keys(restrictionsMapped[d]).map((e, i) => (
                                <Text key={i}>{e} ({Array.from(restrictionsMapped[d][e])})</Text>
                            ))
                            }
                        </Card>
                    ))
                }
                {/*<Card title='Pikachu (me)'>
                    <Text>No alerts!</Text>
                </Card>
                    <Card title='Eevee'>
                    <Text>3 potential ingredient alerts:</Text>
                    <Text>
                        - Crushed almond (Tree Nut), Butter (Dairy), Soymilk (Soy)</Text>

                </Card>
                <Card title='Charmander'>
                    <Text>No alerts!</Text>
                </Card>
                <Card title='Squirtle'>
                    <Text>No alerts!</Text>
                </Card>*/}
            </ScrollView>
        )
    }

    renderNutritionContent() {
        return(
            <ScrollView>
                <Card title='Nutrition'>
                    <Text>Nutritional info</Text>
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