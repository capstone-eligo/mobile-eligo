import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import {Card, Divider} from 'react-native-elements'

import {Actions} from 'react-native-router-flux';

import styles from '../styles'

export default class DRList extends React.Component {
    render() {
        const cardDividerStyle = {height: 0}
        const cardTitleStyle = {fontSize: 14, textAlign: 'left', marginBottom: 0}
       // const cardContainerStyle = {backgroundColor: '#ACDAD7'}

        // dividerStyle={cardDividerStyle}
        // titleStyle={cardTitleStyle}
        // containerStyle={cardContainerStyle}

        return(
            <ScrollView style={styles.container}>
                <Card title="Dairy"
                    imageStyle={{flex: 1, width: 75,height: 75, marginLeft: 130, marginBottom:10, marginTop: 10, borderRadius: 10, resizeMode: 'contain'}}
                    image={require('../img/dairy.png')}>
                    <Text style={{fontWeight:"bold"}}>Ingredients:</Text>
                    <Text>milk, cream, creamer, sherbet, cheese, butter, buttermilk, 
                        custard, lactose, whey, caseinate, nougat, casein, curd, 
                        diacetyl, ghee, half-and-half, lactalbumin, llactoferrin, lactulose, 
                        pudding, recaldent, tagatose, yogurt, yoghurt</Text>
                    <Text style={{color:'blue', paddingTop: 5}} onPress={() => Linking.openURL('http://my.clevelandclinic.org/health/articles/lactose-intolerance, https://www.foodallergy.org/allergens/milk-allergy')}>Source</Text>
                </Card>

                <Card title="Egg"
                    imageStyle={{flex: 1, width: 75,height: 75, marginLeft: 130, marginBottom:10, marginTop: 10, borderRadius: 10, resizeMode: 'contain'}}
                    image={require('../img/eggs.png')}>
                    <Text style={{fontWeight:"bold"}}>Ingredients:</Text>
                    <Text>albumin, albumen, egg, yolk, eggnog, lysozyme, mayonnaise, meringue, ovalbumin, surimi</Text>
                    <Text style={{color:'blue', paddingTop: 5}} onPress={() => Linking.openURL('https://www.foodallergy.org/allergens/egg-allergy')}>Source</Text>
                </Card>

               <Card title="Fish"
                    imageStyle={{flex: 1, width: 75,height: 75, marginLeft: 130, marginBottom:10, marginTop: 10, borderRadius: 10, resizeMode: 'contain'}}
                    image={require('../img/fish.png')}>
                    <Text style={{fontWeight:"bold"}}>Ingredients:</Text>
                    <Text>anchovy, bass, catfish, cod, flounder, grouper, haddock, hake, halibut, 
                        herring, mahi, perch, pike, pollock, salmon, scrod, swordfish, sole, snapper, tilapia, trout, tuna, fish</Text>
                    <Text style={{color:'blue', paddingTop: 5}} onPress={() => Linking.openURL('https://www.foodallergy.org/allergens/fish-allergy')}>Source</Text>
                </Card>

                <Card title="Gluten"
                    imageStyle={{flex: 1, width: 75,height: 75, marginLeft: 130, marginBottom:10, marginTop: 10, borderRadius: 10, resizeMode: 'contain'}}
                    image={require('../img/warning-outline.png')}>
                    <Text style={{fontWeight:"bold"}}>Ingredients:</Text>
                    <Text>rye, barley, triticale, malt, brewer's yeast, bread, bulgur, couscous, 
                        durum, einkorn, emmer, farina, flour, wheat, kamut, matzoh, pasta, seitan, semolina, spelt</Text>
                    <Text style={{color:'blue', paddingTop: 5}} onPress={() => Linking.openURL('https://celiac.org/live-gluten-free/glutenfreediet/sources-of-gluten/')}>Source</Text>
                </Card>

                <Card title="Peanut"
                    imageStyle={{flex: 1, width: 75,height: 75, marginLeft: 130, marginBottom:10, marginTop: 10, borderRadius: 10, resizeMode: 'contain'}}
                    image={require('../img/peanuts.png')}>
                    <Text style={{fontWeight:"bold"}}>Ingredients:</Text>
                    <Text>peanut, nut</Text>
                    <Text style={{color:'blue', paddingTop: 5}} onPress={() => Linking.openURL('#')}>Source</Text>
                </Card>

                <Card title="Sesame"
                    imageStyle={{flex: 1, width: 75,height: 75, marginLeft: 130, marginBottom:10, marginTop: 10, borderRadius: 10, resizeMode: 'contain'}}
                    image={require('../img/sesame.png')}>
                    <Text style={{fontWeight:"bold"}}>Ingredients:</Text>
                    <Text>benne, benniseed, gingelly, gomasio, halvah, sesame, sesamol, sesamum, sesemolina, sim sim, tahini, tahina, tehina, til</Text>
                    <Text style={{color:'blue', paddingTop: 5}} onPress={() => Linking.openURL('https://www.foodallergy.org/allergens/sesame')}>Source</Text>
                </Card>

                <Card title="Shellfish"
                    imageStyle={{flex: 1, width: 75,height: 75, marginLeft: 130, marginBottom:10, marginTop: 10, borderRadius: 10, resizeMode: 'contain'}}
                    image={require('../img/shellfish.png')}>
                    <Text style={{fontWeight:"bold"}}>Ingredients:</Text>
                    <Text>barnacle, crab, crawfish, crawdad, crayfish, ecrevisse, krill, lobster, langouste, langoustine, 
                        scampi, tomalley, prawn, shrimp, crevette, shellfish</Text>
                    <Text style={{color:'blue', paddingTop: 5}} onPress={() => Linking.openURL('https://www.foodallergy.org/allergens/shellfish-allergy')}>Source</Text>
                </Card>

                <Card title="Soy"
                    imageStyle={{flex: 1, width: 75,height: 75, marginLeft: 130, marginBottom:10, marginTop: 10, borderRadius: 10, resizeMode: 'contain'}}
                    image={require('../img/soy.png')}>
                    <Text style={{fontWeight:"bold"}}>Ingredients:</Text>
                    <Text>edamame, miso, natto, shoyu, soy, soya, soybean, tamari, tempeh, TVP, tofu</Text>
                    <Text style={{color:'blue', paddingTop: 5}} onPress={() => Linking.openURL('https://www.foodallergy.org/allergens/soy-allergy')}>Source</Text>
                </Card>

                <Card title="Tree Nuts"
                    imageStyle={{flex: 1, width: 75,height: 75, marginLeft: 130, marginBottom:10, marginTop: 10, borderRadius: 10, resizeMode: 'contain'}}
                    image={require('../img/treenuts.png')}>
                    <Text style={{fontWeight:"bold"}}>Ingredients:</Text>
                    <Text>almond, brazil nut, artificial nut, beechnut, butternut, cashew, chestnut, chiniquapin, 
                        filbert, hazelnut, gianduja, ginkgo, hickory, litchi nut, lichee nut, lychee nut, macadamia, 
                        marzipan, nangai, nut, pecan, pesto, pili, pine nut, pistachio, praline, shea, walnut</Text>
                    <Text style={{color:'blue', paddingTop: 5}} onPress={() => Linking.openURL('https://www.foodallergy.org/allergens/tree-nut-allergy')}>Source</Text>
                </Card>

                <Card title="Wheat"
                    imageStyle={{flex: 1, width: 75,height: 75, marginLeft: 130, marginBottom:10, marginTop: 10, borderRadius: 10, resizeMode: 'contain'}}
                    image={require('../img/wheat.png')}>
                    <Text style={{fontWeight:"bold"}}>Ingredients:</Text>
                    <Text>bread, bulgur, cereal, couscous, cracker, durum, einkorn, emmer, farina, flour, wheat, kamut, matzoh, 
                        pasta, seitan, semolina, spelt, triticale, </Text>
                    <Text style={{color:'blue', paddingTop: 5}} onPress={() => Linking.openURL('https://www.foodallergy.org/allergens/wheat-allergy')}>Source</Text>
                </Card>
                

            </ScrollView>
      );
    }
}
