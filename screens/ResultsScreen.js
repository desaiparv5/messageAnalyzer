import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native';
import NewsCard from '../components/NewsCard'
import EmptyList from '../components/EmptyList'

const ResultsScreen = ({route, navigation}) => {

    const[result, setResult] = useState([])
    const[isRefreshing, setIsRefreshing] = useState(false)

    const getData = async() => {
        let data = {
            method: 'POST',
            body:'news='+route.params.query,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        var response = await fetch('https://fakenewsdetectorapi.herokuapp.com',data)
        var json = await response.json()
        await setResult(json)
        setIsRefreshing(false)
    }

    const _handleRefresh = async () => {
        await setIsRefreshing(true)
        getData()
    }

    const _handlePress = (item) => {
        navigation.navigate('ResultDetailedScreen', {news: item})
    }

    useEffect(()=> {
        getData();
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