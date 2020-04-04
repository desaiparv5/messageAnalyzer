import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Button,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import ResultsScreen from './screens/ResultsScreen'
import ResultDetailedScreen from './screens/ResultDetailedScreen'

const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen}
                        options={
                            {
                                title: 'Home',
                                headerStyle: {
                                    backgroundColor: '#273469',
                                },
                                headerTintColor: '#EBF2FA',
                            }
                        }
                    />
                    <Stack.Screen 
                        name="ResultsScreen" 
                        component={ResultsScreen}
                        options={
                            {
                                title: 'Result',
                                headerStyle: {
                                    backgroundColor: '#273469',
                                },
                                headerTintColor: '#EBF2FA',
                            }
                        }
                    />
                    <Stack.Screen 
                        name="ResultDetailedScreen" 
                        component={ResultDetailedScreen}
                        options={
                            {
                                title: 'Result',
                                headerStyle: {
                                    backgroundColor: '#273469',
                                },
                                headerTintColor: '#EBF2FA',
                            }
                        }
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default App