import 'react-native-gesture-handler'
import Routes from "./src/routes";
import { NavigationContainer } from '@react-navigation/native';
export default function App() {

  return (
    <NavigationContainer>
    <Routes></Routes>
    </NavigationContainer>
  );

}




const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#141a29",

    alignItems: "center",

  },

});