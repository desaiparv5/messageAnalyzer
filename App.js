/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppIntroSlider from 'react-native-app-intro-slider';
import HomeScreen from './screens/HomeScreen';
import ResultsScreen from './screens/ResultsScreen';
import ResultDetailedScreen from './screens/ResultDetailedScreen';
import ContributionScreen from './screens/ContributionScreen';
import ShowNews from './screens/ShowNews';

const Stack = createStackNavigator();

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = async () => {
    await setShowRealApp(true);
  };

  return showRealApp ? (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
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
            })}
          />
          <Stack.Screen
            name="ResultsScreen"
            component={ResultsScreen}
            options={{
              title: 'Result',
              headerStyle: {
                backgroundColor: '#273469',
              },
              headerTintColor: '#EBF2FA',
            }}
          />
          <Stack.Screen
            name="ResultDetailedScreen"
            component={ResultDetailedScreen}
            options={{
              title: 'Result',
              headerStyle: {
                backgroundColor: '#273469',
              },
              headerTintColor: '#EBF2FA',
            }}
          />
          <Stack.Screen
            name="ContributionScreen"
            component={ContributionScreen}
            options={{
              title: 'Contribute',
              headerStyle: {
                backgroundColor: '#273469',
              },
              headerTintColor: '#EBF2FA',
            }}
          />
          <Stack.Screen
            name="ShowNews"
            component={ShowNews}
            options={{
              title: 'Contribute',
              headerStyle: {
                backgroundColor: '#273469',
              },
              headerTintColor: '#EBF2FA',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  ) : (
    <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
  );
};

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  title: {
    fontSize: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default App;
