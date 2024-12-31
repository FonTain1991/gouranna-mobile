import { AuthScreen } from '@/screens'
import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator()

export function AuthNavigation() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name='Auth' component={AuthScreen} />
    </AuthStack.Navigator>
  )
}