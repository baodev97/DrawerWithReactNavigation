import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UserScreen from './screen/UserScreen';
import WelcomeScreen from './screen/WelcomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='welcome'>
        <Drawer.Screen name='welcome' component={WelcomeScreen}/>
        <Drawer.Screen name='user' component={UserScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}