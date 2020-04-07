import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from "react-native";

const ShowNews = ({route, navigation}) => {
    
    const[language, setLanguage] = useState('')

    useEffect(()=>{
        setLanguage(route.params.key)
    },[])

    return(
        <View style={styles.container}>
            <Text>{language} aa language na news batavo</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})
export default ShowNews