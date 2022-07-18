import React, {Component} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'
import Home from '../views/home'

const Stack = createStackNavigator();
export default () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}