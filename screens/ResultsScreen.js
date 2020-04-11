import React, { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import NewsCard from '../components/NewsCard'
import EndOfList from "../components/EndOfList";
import Toast from 'react-native-tiny-toast'

const ResultsScreen = ({route, navigation}) => {

    const[query, setQuery] = useState(route.params.query)
    const[result, setResult] = useState([])
    const[isRefreshing, setIsRefreshing] = useState(false)
    const[isLoading, setIsLoading] = useState(true)
    const[endList, setEndList] = useState(false)

    const getData = async() => {
        let data = {
            method: 'POST',
            body:'news='+query,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        var response = await fetch('https://fakenewsdetectorapi.herokuapp.com',data)
        var json = await response.json()
        await setResult(json)
        await setIsLoading(false)
    }

    const _handleRefresh = async () => {
        await setIsRefreshing(true)
        getData()
        await setIsRefreshing(false)
    }

    const _handlePress = (item) => {
        navigation.navigate('ResultDetailedScreen', {news: item})
    }

    const _handleEndListPress = async() => {
        //fetch("Koik api ne call kari ne post ma routes.params.query pass karvani")
        console.log('Send this for further processing')
        setEndList(true)
        Toast.show("Sent")
    }

    useEffect(()=> {
        getData()
    },[])

    return (
    <View style={styles.container}>
        {
            isLoading?
            <ActivityIndicator size="large" color="#0000ff" />:
            <FlatList
                style={styles.listContainer}
                refreshing = {isRefreshing}
                onRefresh = {()=>{_handleRefresh()}}
                keyExtractor={item => item.id}
                data = {result}
                renderItem = {({item, index, separators})=>{
                    return (<NewsCard key={index} onPress={()=>_handlePress(item)} item={item} />)
                }}
                //ListEmptyComponent={<EmptyList />}
                ListFooterComponent={endList?null:<EndOfList press={()=>{_handleEndListPress()}}/>}
            />
        }
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
        marginTop: 5,
    },
})

export default ResultsScreen