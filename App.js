import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native'
import { Icon } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import ResultsScreen from './screens/ResultsScreen'
import ResultDetailedScreen from './screens/ResultDetailedScreen'
import ContributionScreen from './screens/ContributionScreen'
import ShowNews from './screens/ShowNews'

const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen}
                        options={({ navigation }) => ({
                            title: 'Home',
                            headerStyle: {
                                backgroundColor: '#273469',
                            },
                            headerTintColor: '#EBF2FA',
                            headerRight: () => (
                                <View style={{marginRight: 8}}>
                                    <Icon
                                        onPress={() => navigation.navigate('ContributionScreen')}
                                        name="group"
                                        type="material"
                                        color="#EBF2FA"
                                        raises={true}
                                    />
                                </View>
                            ),
                          })
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
                    <Stack.Screen 
                        name="ContributionScreen"
                        component={ContributionScreen}
                        options={
                            {
                                title: 'Contribute',
                                headerStyle: {
                                    backgroundColor: '#273469',
                                },
                                headerTintColor: '#EBF2FA',
                            }
                        }
                    />
                    <Stack.Screen 
                        name="ShowNews"
                        component={ShowNews}
                        options={
                            {
                                title: 'Contribute',
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