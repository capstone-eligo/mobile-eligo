import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {Card, Button, Avatar, Grid, Row, Col, ButtonGroup} from 'react-native-elements'
// import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';

import styles from '../styles'


// mapStateToProps = (state) => ({ barcodes: state.barcodeReducer.barcodes });

// mapDispatchToProps = (dispatch) => ({
//     // addGroceryItem: (groceryItem) => {
//     //     dispatch(addToGroceryList(groceryItem));
//     // },
//     // addTodoItem: (todoItem) => {
//     //     dispatch(addToTodoList(todoItem));
//     // },
// });

export default class ResultsContent extends React.Component {
    constructor(props) {
        super(props);
    }

    renderResultsContent() {
        return(
            <ScrollView>
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
                <Text>Nutrition</Text>                      
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