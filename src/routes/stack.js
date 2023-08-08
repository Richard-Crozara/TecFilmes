import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home/index'
import Details from "../screens/details";

export default function Routes(){


const stack = createStackNavigator();

return(

    
        <stack.Navigator>
            <stack.Screen name = 'home' component = {Home} options = {
                {
                    headerShown: false,
                }
            }/>
          <stack.Screen name = 'details' component = {Details}/>
        </stack.Navigator>


)

}
