import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ForumsScreen from '../screens/ForumsScreen';
import LawyersScreen from '../screens/LawyersScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: '#6c757d',
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Text style={[styles.icon, { color }]}>🏠</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Forums"
        component={ForumsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Text style={[styles.icon, { color }]}>💬</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lawyers"
        component={LawyersScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Text style={[styles.icon, { color }]}>⚖️</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Text style={[styles.icon, { color }]}>👤</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  tabBarIcon: {
    marginBottom: 2,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
  },
});

export default BottomTabNavigator;