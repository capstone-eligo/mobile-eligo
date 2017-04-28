import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {Card, Button, Avatar, Grid, Row, Col, ButtonGroup} from 'react-native-elements'

import styles from '../styles'

export default class ResultsContent extends React.Component {
    constructor(props) {
        super(props);
    }

    renderResultsContent() {
        return(
            <ScrollView style={styles.resultsContentScroll}>
                <Card title='Pikachu (me)'>
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
                </Card>
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
        return(
            <ScrollView>
                <Text>Ingredients</Text>
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