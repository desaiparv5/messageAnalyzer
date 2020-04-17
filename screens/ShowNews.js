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
        const response = await fetch('https://fakenewsdetectorapi.herokuapp.com/getnews?language='+language)
        const json = await response.json()
        await setNews(json)
        await setIsLoading(false)
    }

    useEffect(()=>{
        getNews()
    },[])

    const submitNews = async(vote) => {
        setIsLoading(true)
        const response = await fetch('https://fakenewsdetectorapi.herokuapp.com/vote?id='+news.id+'&vote='+vote)
        const json = await response.json()
        console.log(json.vote)
        if(json.vote==="success"){
            await getNews()
        }else{
            Toast.show("Error")
            setIsLoading(false)
        }
    }

    const _handlePass = async () => {
        await setIsLoading(true)
        getNews()
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 20, fontWeight:"bold", color: "#273469"}}>MESSAGE</Text>
            </View>
            {
                isLoading?
                <ActivityIndicator 
                    color="#273469"
                    size="large"
                    style={{alignSelf: "center", justifyContent: "center"}}
                />:
                <ScrollView>
                    <Text>{news.news}</Text>
                </ScrollView>
            }
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={()=>{submitNews('real')}}
                    style={[styles.button,{backgroundColor: "green"}]}
                >
                    <Text style={{fontWeight: "bold", color: "white"}}>Real</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{_handlePass()}}
                    style={[styles.button,{backgroundColor: "gray"}]}
                >
                    <Text style={{fontWeight: "bold", color: "white"}}>Pass</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{submitNews('fake')}}
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
        justifyContent: "space-between"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 5,
        width: '100%',
    },
    button:{
        height: 30,
        width: '30%',
        alignItems: "center",
        justifyContent: "center"
    },
})
export default ShowNews