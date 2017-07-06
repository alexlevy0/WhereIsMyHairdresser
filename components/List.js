import React from 'react'
import { TextInput, StyleSheet, Button, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import GlobalStyle from './Style'

export default class List extends React.Component {

    static nagivationOptions = ({ navigation }) => {
        return {
            title: `Coiffeur / ${navigaton.state.params.city}`,
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            city: this.props.nagivation.state.params.city,
            report: null
        }
    }

    setCity(city) {
        this.setState({ city })
    }

    submit(city) {
        this.props.nagivation.navigate('Result', { city: this.state.city })
    }

    render() {
        return (
            <View style={GlobalStyle.container}>
                <Text></Text>
            </View>
        )
    }

}
