import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native';
import NewsCard from '../components/NewsCard'
import EmptyList from '../components/EmptyList'

const ResultsScreen = ({route, navigation}) => {

    const[result, setResult] = useState([
        {
            "id":"0",
            "news": "parv gando che",
            "authenticity": false,
            "dateAdded": "20 March 2020",
            "score": 0.6666666666666666
        }, 
        {
            "id":"1",
            "news": "shivam gando che",
            "authenticity": true, 
            "dateAdded": "20 January 2020",
            "score": 0.6666666666666666
        },
        {
            "id":"2",
            "news": "aa news bau lambo che me jate banayo che. test karva. barabar chale che ke nai? chalse ne aavu? lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            "authenticity": true, 
            "dateAdded": "20 March 2012",
            "score": 0.6666666666666666
        }
    ])
    const[isRefreshing, setIsRefreshing] = useState(false)

    const getData = async() => {
        var response = await fetch('https://fakenewsdetectorapi.herokuapp.com/?news='+route.params.query)  
        var json = await response.json()
        await setResult(json)
        //console.log(json)
        setIsRefreshing(false)
    }

    const _handleRefresh = async () => {
        //await setIsRefreshing(true)
        //getData()
    }

    const _handlePress = (item) => {
        navigation.navigate('ResultDetailedScreen', {news: item})
    }

    useEffect(()=> {
        //setResult([])
        //getData();
    },[])

    return (
    <View style={styles.container}>
        <FlatList
            style={styles.listContainer}
            refreshing = {isRefreshing}
            onRefresh = {()=>{_handleRefresh()}}
            keyExtractor={item => item.id}
            data = {result}
            renderItem = {(item, index, separators)=>{
                return (<NewsCard key={index} onPress={()=>_handlePress(item.item)} item={item.item} />)
            }}
            ListEmptyComponent={<EmptyList />}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    listContainer: {
        width: "100%",
        flex: 1,
    },
})

export default ResultsScreen