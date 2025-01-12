import SVGGoogle from '@/assets/svg/SocialGoogle.svg'
import { useAuthGoogle, useEvent } from '@/hooks'
import { Platform, TouchableOpacity } from 'react-native'

export const AuthGoogle = () => {
  const googleAuthAction = useAuthGoogle()

  const onAppleButtonPress = useEvent(async () => {
    if (Platform.OS === 'ios') {
      await googleAuthAction()
    }
  })
  return (
    <TouchableOpacity
      onPress={onAppleButtonPress}
      // style={styles.container}
      activeOpacity={0.9}
    >
      <SVGGoogle />
    </TouchableOpacity>
  )
}