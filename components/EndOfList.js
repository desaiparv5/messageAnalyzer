import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from "react-native"

const EndofList = (props) => {
    return(
        <TouchableHighlight 
            onPress={()=>{props.press()}}
            underlayColor="#ebf2fa"
        >
            <View style={styles.container}>
                <Text style={styles.text}>Didn't get your result?</Text>
                <Text style={styles.text}>Tap here to send this query for review</Text>
            </View>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    text: {
        alignSelf: "center",
    },
})

export default EndofList