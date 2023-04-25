import { StyleSheet, Text, View, FlatList } from "react-native";
import BannerFilmes from "./src/components/bannerFilmes";
import Filmes from "./src/data/movies";
import Header from "./src/components/header";
import SearchBar from "./src/components/searchbar";
import CardMovies from "./src/components/cardFilmes";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <BannerFilmes></BannerFilmes>

      <View style={{width:"90%"}}>
      <FlatList
      horizontal ={true}
      showsHorizontalScrollIndicator={false}
        data={Filmes}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => (
        
        <CardMovies
        
        titulo = {item.nome}
        nota = {item.nota}
        imagem = {item.imagem}

        />

      

        )}
      />


      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a29",
    alignItems: "center",
  },
});
