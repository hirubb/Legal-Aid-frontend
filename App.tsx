import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
