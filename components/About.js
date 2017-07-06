import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import GlobalStyle from './Style'

export default class About extends React.Component {

    // static navigationOptions = {
    //     tabBarIcon: () => {
    //         return <Text>Recherche</Text>
    //     }
    // }

    search() {
        this.props.navigation.navigate('Search')
    }

    render() {
        return (
            <View style={GlobalStyle.container}>
                <Text style={GlobalStyle.title}>A propos de l'Application</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut dignissim metus. Nunc bibendum, nulla aliquet pretium finibus, mi dui.</Text>
                <Button color={GlobalStyle.blue} onPress={() => this.search()} title="Rechercher un coiffeur" />
            </View>
        )
    }
}
