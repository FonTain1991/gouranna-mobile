import { AuthGoogle } from '@/components/Auth'
import { AuthApple } from '@/components/Auth/AuthApple'
import { useMeQuery } from '@/gql/me'
import { Image, SafeAreaView, Text } from 'react-native'

export const AuthScreen = () => {
  const { data } = useMeQuery()
  console.log(data)
  return (
    <SafeAreaView>
      <Text>AuthScreen</Text>
      <AuthApple />
      <AuthGoogle />

      <Text>{data?.me?.firstName}</Text>
      {!!data?.me?.avatar && (
        <Image
          source={{
            uri: data.me.avatar
          }}
          style={{ width: 100, height: 100 }}
        />
      )}
    </SafeAreaView>
  )
}