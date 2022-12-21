import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Adress from "./src/adress";
import DetailAdress from "./src/detailAdress";

const Stack = createNativeStackNavigator();

 export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="detailAdress" component={DetailAdress} />
        <Stack.Screen name="adress" component={Adress} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}