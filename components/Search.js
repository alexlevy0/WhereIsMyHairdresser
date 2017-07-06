import React from 'react'
import { TextInput, StyleSheet, Button, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import GlobalStyle from './Style'
import List from './List'

class Search extends React.Component {

    static nagivationOptions = {
        title: "Rechercher un coiffeur",
    }

    constructor(props) {
        super(props)
        this.state = {
            city: 'Lyon'
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
                <TextInput underlineColorAndroid='transparent'
                    style={GlobalStyle.input}
                    value={this.state.city}
                    onChangeText={text => this.setCity(text)}
                />
                <Button color={GlobalStyle.blue} onPress={() => this.submit()} title="Rechercher" />
            </View>
        )
    }
}

const nagivationOptions = {
    headerStyle: GlobalStyle.header,
    headerTitleStyle: GlobalStyle.headerTitle,
}

export default StackNavigator({
    Search: {
        screen: Search,
        nagivationOptions
    },
    Result: {
        screen: List,
        nagivationOptions
    }
})
