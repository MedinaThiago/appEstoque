import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Cadastro from './pages/cadastro'
import Pesquisa from './pages/pesquisa'
import Main from './pages/main'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} options={{
                    title: 'Bem Vindo', headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#7159c1'
                    },
                    headerTintColor: '#FFF'
                }} />
                <Stack.Screen name="Cadastro" component={Cadastro} options={{
                    title: 'Cadastro De Produtos', headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#7159c1'
                    },
                    headerTintColor: '#FFF'
                }} />
                <Stack.Screen name="Pesquisa" component={Pesquisa} options={{
                    title: 'Produtos', headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#7159c1'
                    },
                    headerTintColor: '#FFF'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}