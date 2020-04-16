import React, { useEffect, useState } from 'react'
import { 
    View, 
    StyleSheet, 
    Text, 
    ScrollView, 
    TouchableOpacity,
    ActivityIndicator
} from "react-native";

const ShowNews = ({route, navigation}) => {
    
    const[language, setLanguage] = useState(route.params.key)
    const[news, setNews] = useState({})
    const[isLoading, setIsLoading] = useState(true)

    const getNews = async() => {
        const response = await fetch('https://fakenewsdetectorapi.herokuapp.com/getnews?language='+route.params.key)
        const json = await response.json()
        await setNews(json)
        await setIsLoading(false)
    }

    useEffect(()=>{
        getNews()
    },[])

    return(
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 20, fontWeight:"bold", color: "#273469"}}>MESSAGE</Text>
            </View>
            {
                isLoading?
                <ActivityIndicator 
                    color="#273469"
                    style={{alignSelf: "center", justifyContent: "center"}}
                />:
                <ScrollView>
                    <Text>{news.news}</Text>
                </ScrollView>
            }
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={()=>{console.log('real')}}
                    style={[styles.button,{backgroundColor: "green"}]}
                >
                    <Text style={{fontWeight: "bold", color: "white"}}>Real</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{console.log('fake')}}
                    style={[styles.button,{backgroundColor: "red"}]}
                >
                    <Text style={{fontWeight: "bold", color: "white"}}>Fake</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 5,
    },
    button:{
        height: 30,
        width: 150,
        alignItems: "center",
        justifyContent: "center"
    },
})
export default ShowNews