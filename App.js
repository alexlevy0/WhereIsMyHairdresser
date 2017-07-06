import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import About from './components/About'
import Search from './components/Search'
import GlobalStyle from './components/Style'

const Tabs = TabNavigator({
    Search: { screen: Search },
    About: { screen: About },
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            indicatorStyle: {
                height: 2,
                backgroundColor: '#FFF'
            },
            // showIcon: true,
            // showLabel: false,
        },
        style: {
            backgroundColor: '#529CF3',
            borderTopWidth: 1,
            borderColor: '#0075ff',

        }

    })

export default class App extends React.Component {
    render() {
        return (
            // <View >
            <View style={GlobalStyle.view}>
                <StatusBar hidden={true} />
                <Tabs />
            </View>
        )
    }
}
