import { RootDrawerParamList } from '@/App';
import { DrawerScreenProps } from "@react-navigation/drawer";
import { Button, StyleSheet, Text, View } from 'react-native';

type UserScreenNavigationProp = DrawerScreenProps<RootDrawerParamList,'user'>

function UserScreen({navigation}:UserScreenNavigationProp) {

  function handleOpenDrawer (){
    navigation.toggleDrawer()
  }
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>user</Text> screen!
      </Text>
      <Button title='Open Drawer' onPress={handleOpenDrawer}/>
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
