import { AuthScreen } from '@/screens'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthNavigation } from './AuthNavigation'

const NavigationStack = createStackNavigator()

export function Navigation() {

  const user = null

  if (!user) {
    return <AuthNavigation />
  }

  return (
    <NavigationStack.Navigator>
      {/* <NavigationStack.Screen name='Auth' component={AuthScreen} /> */}
    </NavigationStack.Navigator>
  )
}