import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackLayout from './layout/StackLayout';
// import TabLayout from './layout/TabLayout';

const App = (props) => { 

    return <NavigationContainer>
        <StackLayout />
    </NavigationContainer>
}

export default App