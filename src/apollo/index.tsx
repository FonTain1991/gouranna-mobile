import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client'
import { typePolicies } from './typePolicies'
import { memo, PropsWithChildren } from 'react'


export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies
  }),
  uri: 'http://192.168.100.2:4444/graphql',
})

export const ApolloProvider = memo(({ children }: PropsWithChildren): React.JSX.Element => {
  return (
    <Provider client={client}>
      {children}
    </Provider>
  )
})