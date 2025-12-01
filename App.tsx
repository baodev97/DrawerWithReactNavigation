// import Ionicons from "@expo/vector-icons/Ionicons";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import UserScreen from "./screen/UserScreen";
// import WelcomeScreen from "./screen/WelcomeScreen";

// const Drawer = createDrawerNavigator<RootDrawerParamList>();

// export type RootDrawerParamList = {
//   welcome:undefined,
//   user:undefined
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="welcome"
//         screenOptions={{
//           headerStyle: { backgroundColor: "#3050d0ff" },
//           headerTintColor: "#ffffff",
//           drawerActiveBackgroundColor: "#ccc",
//           drawerActiveTintColor: "#25398aff",
//         }}
//       >
//         <Drawer.Screen
//           name="welcome"
//           component={WelcomeScreen}
//           options={{
//             drawerLabel: "Welcome Screen",
//             drawerIcon: ({ color, size }) => (
//               <Ionicons color={color} size={size} name="home" />
//             ),
//             //drawerStyle:{backgroundColor:"#ccc"}
//           }}
//         />
//         <Drawer.Screen
//           name="user"
//           component={UserScreen}
//           options={{
//             drawerLabel: "Welcome Screen",
//             drawerIcon: ({ color, size }) => (
//               <Ionicons color={color} size={size} name="person" />
//             ),
//             //drawerStyle:{backgroundColor:"#ccc"}
//           }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import UserScreen from "./screen/UserScreen";
import WelcomeScreen from "./screen/WelcomeScreen";

const BottomTab = createBottomTabNavigator<RootDrawerParamList>();

export type RootDrawerParamList = {
  welcome:undefined,
  user:undefined
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerStyle: { backgroundColor: "#3050d0ff" },
          headerTintColor: "#ffffff",
          tabBarActiveTintColor:'#213894ff'
        }}
      >
        <BottomTab.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon:({size,color})=> <Ionicons name="home" size={size} color={color}/>
          }}
        />
        <BottomTab.Screen
          name="user"
          component={UserScreen}
          options={{
            tabBarIcon:({size,color})=> <Ionicons name="person" size={size} color={color}/>
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
