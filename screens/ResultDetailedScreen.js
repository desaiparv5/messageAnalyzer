/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import * as Progress from 'react-native-progress';

const ResultDetailedScreen = ({route, navigation}) => {
  // eslint-disable-next-line no-unused-vars
  const [newsItem, setNewsItem] = useState(route.params.news);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      {newsItem.authenticity == null ? (
        <VoteBar item={newsItem} />
      ) : (
        <View style={styles.fakeContainer}>
          <Text
            style={[
              styles.fakeTextStyles,
              {color: newsItem.authenticity ? 'green' : 'red'},
            ]}>
            {newsItem.authenticity ? 'Real' : 'Fake'}
          </Text>
        </View>
      )}
      <View style={styles.dateContainer}>
        <Text
          style={[styles.textStyles, {color: '#273469', fontWeight: 'bold'}]}>
          Recorded on date:{' '}
        </Text>
        <Text>{newsItem.date}</Text>
      </View>
      <View style={styles.newsContainer}>
        <Text
          style={[
            styles.textStyles,
            {fontSize: 20, color: '#273469', fontWeight: 'bold'},
          ]}>
          News
        </Text>
        <ScrollView style={{}}>
          <Text style={[styles.textStyles, {textAlign: 'justify'}]}>
            {newsItem.news}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const VoteBar = props => {
  return (
    <View>
      <View>
        <Text>Note: This is not confirmed by any of the authority</Text>
      </View>
      <View>
        <Text style={{color: '#273469', fontWeight: 'bold'}}>
          Public opinion
        </Text>
      </View>
      <View style={{marginTop: 5}}>
        <Progress.Bar
          progress={props.item.real / (props.item.real + props.item.fake)}
          width={null}
          color="green"
          unfilledColor="red"
          height={20}
          borderRadius={0}
          borderColor="black"
          borderWidth={0}
        />
        <View style={styles.counter}>
          <Text style={{color: 'white', opacity: 0.9}}>
            {props.item.real}(real)
          </Text>
          <Text style={{color: 'white', opacity: 0.9}}>
            (fake){props.item.fake}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsContainer: {},
  dateContainer: {
    flexDirection: 'row',
  },
  fakeContainer: {},
  textStyles: {
    fontSize: 16,
  },
  container: {
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  fakeTextStyles: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  counter: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ResultDetailedScreen;
