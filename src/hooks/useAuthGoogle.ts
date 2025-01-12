import { useSignInByGoogleMutation } from '@/gql/signInByGoogle'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Platform } from 'react-native'
import { useEvent } from './useEvent'

interface IUseAuthGoogle {
  input?: {
    active?: boolean
  }
}

const IOS_CLIENT_ID = '719132212338-2vjcpb7eb75qde2k0j41f9dd9afrn3t6.apps.googleusercontent.com'
export function useAuthGoogle(options?: IUseAuthGoogle) {
  const [authAction] = useSignInByGoogleMutation({
    refetchQueries: ['me'],
    awaitRefetchQueries: true
  })

  return useEvent(async () => {
    try {
      GoogleSignin.configure({
        webClientId: Platform.OS === 'ios' ? IOS_CLIENT_ID : process.env.GOOGLE_CLIENT_ID
      })
      const userInfo = await GoogleSignin.signIn({})
      if (userInfo?.data?.idToken) {
        const first_name = userInfo?.data?.user?.givenName
        const last_name = userInfo?.data?.user?.familyName

        const google = await GoogleSignin.getTokens()
        const { data } = await authAction({
          variables: {
            token: google.accessToken
          }
        })
        return data
      }
    } catch (error) {
      return error
    }
  })
}