import appleAuth from '@invertase/react-native-apple-authentication'
import { Platform } from 'react-native'
import { useEvent } from './useEvent'

export function useAuthApple() {
  // const [authApple] = useMutation(AUTH_APPLE, {
  //   update(cache, { data }) {
  //     if (data.auth?.active) {
  //       cache.writeQuery({ query: GET_USER, data: { user: { ...data.auth } } })
  //     }
  //   }
  // })

  return useEvent(async () => {
    if (Platform.OS === 'ios') {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.REFRESH,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      }).catch(console.log)
      const first_name = appleAuthRequestResponse.fullName?.givenName
      const last_name = appleAuthRequestResponse.fullName?.familyName
      // const { data } = await authApple({
      //     variables: {
      //       input: {
      //         id_token: appleAuthRequestResponse.identityToken,
      //         nonce: appleAuthRequestResponse.nonce,
      //         first_name,
      //         last_name,
      //       }
      //     }
      //   })
      // return data
    }

    // appleAuthAndroid.configure({
    //   clientId: 'com.fanclaws.services',
    //   redirectUri: `${process.env.API}/auth/apple/callback`,
    //   responseType: appleAuthAndroid.ResponseType.ALL,
    //   scope: appleAuthAndroid.Scope.ALL,
    //   nonce: uuid(),
    //   state: uuid()
    // })

    // const response = await appleAuthAndroid.signIn()

    // const first_name = response?.user?.name?.firstName
    // const last_name = response?.user?.name?.lastName
    // const [{ data }] = await Promise.all([
    //   authApple({
    //     variables: {
    //       input: {
    //         id_token: response.id_token,
    //         first_name,
    //         last_name,
    //         active: options?.input?.active
    //       }
    //     }
    //   }),
    //   analytics().logEvent('Auth', {
    //     type: 'apple',
    //     status: 'success',
    //     os: Platform.OS
    //   })
    // ])
    // return data
  })
}