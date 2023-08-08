import React from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from '@react-navigation/native'

import { StyleSheet } from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Details(){

    const route = useRoute();

    return(
        <View>
                <Text> {route.params.titulo} </Text>

                <Image style={{width:430, height:430}} source ={require(`../../Img/${route.params.imagem}`)} />

                <Stars
    default={2.5}
    count={10}
    half={true}
    starSize={50} 
    fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
  />

        </View>
        
        )
       


}
    <View style={styles.container}></View>
const styles = StyleSheet.create({
    myStarStyle: {
      color: 'yellow',
      backgroundColor: 'transparent',
      textShadowColor: 'black',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 2,
    },
    myEmptyStarStyle: {
      color: 'white',
    },
    container: {
            backgroundColor: "#141a29",
          },
  });


      

