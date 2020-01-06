import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

class sideMenuScreen extends React.Component {
  render() {
    return (
      <View style={styles.drawer}>
        <Text style={styles.text}>SideMenu</Text>
      </View>
    );
  }
}

class searchScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Searching</Text>
      </View>
    );
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    side: sideMenuScreen,
    search: searchScreen,
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

export default DrawerNavigator;
