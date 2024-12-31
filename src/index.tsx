import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloProvider } from './apollo'
import { Navigation } from './navigation'

function App(): React.JSX.Element {
  return (
    <ApolloProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App
