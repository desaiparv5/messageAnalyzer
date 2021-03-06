/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const ContributionScreen = ({navigation}) => {
  const [languageList, setLanguageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getLanguages = async () => {
    var response = await fetch(
      'https://fakenewsdetectorapi.herokuapp.com/getlangs',
    );
    var json = await response.json();
    await setLanguageList(json);
    await setIsLoading(false);
  };

  useEffect(() => {
    getLanguages();
  }, []);

  return isLoading ? (
    <ActivityIndicator size="large" />
  ) : (
    <View style={styles.container}>
      <Text
        style={{
          paddingLeft: 5,
          fontSize: 24,
          paddingVertical: 15,
          color: '#064789',
          fontWeight: 'bold',
          borderBottomWidth: 1,
        }}>
        Choose your language
      </Text>
      <FlatList
        data={languageList}
        keyExtractor={item => item.key}
        renderItem={({item, index, separators}) => {
          return (
            <ListItem
              key={index}
              item={item}
              onPress={() => {
                navigation.navigate('ShowNews', {key: item.key});
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebf2fa',
    flex: 1,
    justifyContent: 'center',
  },
  Item: {
    paddingLeft: 5,
    height: 60,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
});

const ListItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.Item}>
      <Text style={{fontSize: 20}}>{props.item.language}</Text>
    </TouchableOpacity>
  );
};

export default ContributionScreen;
