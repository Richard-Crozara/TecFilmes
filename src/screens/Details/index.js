import React from "react";
import { View, Text, Image,  StyleSheet, TouchableOpacity } from "react-native";
import {useRoute} from '@react-navigation/native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Details(){

    const route = useRoute();

return(



    <View style = {styles.container}>

              <TouchableOpacity style={styles.Botaovoltar} onPress={ () => navigation.navigate('Home')}>
                <Icon 
                name="chevron-left-circle" 
                size={40} color='#FFF' 
                style={styles.Icon}
                />

                <Text style={styles.TituloTela}>
                  Detalhes
                </Text>
                </TouchableOpacity>
         
                 <Image style = {styles.image} source={{uri:`https://image.tmdb.org/t/p/original/${route.params.imagem}`}} />
               
               <Stars
                      default={10}
                      count={10}
                      half={true}
                      starSize={50} 
                      fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                      emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                      halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
               />




<Text style={styles.textNota}>{route.params.nota}</Text>
<Text style={styles.textTitulo}>{route.params.titulo}</Text>
{route.params.sinopse && <Text style={styles.textSinopse}>{route.params.sinopse}</Text>}

            
      
      </View>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a29",
    alignItems: "center",
  },
  myStarStyle: {
    marginTop: 10,
    color: 'yellow',
    fontSize: 30,
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  textNota: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textTitulo: {
    fontSize: 24,   
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 10, 
  },
  textSinopse: {
    fontSize: 16, 
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', 
    marginHorizontal: 20, 
    marginTop: 20, 
  },
  image: {
    width: '90%',
    height: 400,
    marginTop: 10,
    borderRadius: 10,
  },
  Icon: {
    marginLeft: -175,
    marginTop: 15
  },
  TituloTela: {
    fontSize: 30,
    color: "#FFF",
    marginTop: 15,
    marginLeft: 10
  },
  Botaovoltar: {
    flexDirection: 'row'
  }
});