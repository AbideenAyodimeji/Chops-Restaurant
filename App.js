import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import MealDetails from './screens/MealDetails'
import MealPlans from './screens/MealPlans'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='MealDetails' component={MealDetails} />
        <Stack.Screen name='MealPlans' component={MealPlans} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
