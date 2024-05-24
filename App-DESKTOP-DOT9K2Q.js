import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { AntDesign, MaterialIcons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen'
import MealDetails from './screens/MealDetails'
import MealPlans from './screens/MealPlans'
import MyProfile from './screens/MyProfile'
import SetMealPlan from './screens/SetMealPlan'
import MainHome from './screens/MainHome'
import MainHomeSelectedMeal from './screens/MainHomeSelectedMeal'
import MainMealDetails from './screens/MainMealDetails'
import ProfileSettings from './screens/ProfileSettings'
import PaymentMethod from './screens/PaymentMethod'
import AddingPaymentMethod from './screens/AddingPaymentMethod'

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

function MatBottomTabs() {
  return (
    <Tab.Navigator activeColor='#FF8E09' barStyle={{ backgroundColor: '#fff' }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='MealPlans'
        component={MealPlans}
        options={{
          tabBarLabel: 'MealPlans',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='no-meals' size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='MyProfile'
        component={MyProfile}
        options={{
          tabBarLabel: 'MyProfile',
          tabBarIcon: ({ color }) => (
            <AntDesign name='profile' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='MatBottomTabs'
          component={MatBottomTabs}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen name='MealDetails' component={MealDetails} />
        <Stack.Screen name='SetMealPlan' component={SetMealPlan} />
        <Stack.Screen name='MainHome' component={MainHome} />
        <Stack.Screen
          name='MainHomeSelectedMeal'
          component={MainHomeSelectedMeal}
        />
        <Stack.Screen name='MainMealDetails' component={MainMealDetails} />
        <Stack.Screen name='ProfileSettings' component={ProfileSettings} />
        <Stack.Screen name='PaymentMethod' component={PaymentMethod} />
        <Stack.Screen
          name='AddingPaymentMethod'
          component={AddingPaymentMethod}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
