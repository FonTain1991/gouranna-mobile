import { Platform, TouchableOpacity, View } from 'react-native'
import SVGApple from '@/assets/svg/SocialApple.svg'
import { useAuthApple, useEvent } from '@/hooks'

export const AuthApple = () => {
  const appleAuthAction = useAuthApple()

  const onAppleButtonPress = useEvent(async () => {
    if (Platform.OS === 'ios') {
      const data = await appleAuthAction()
    }
  })
  return (
    <TouchableOpacity
      onPress={onAppleButtonPress}
      // style={styles.container}
      activeOpacity={0.9}
    >
      <SVGApple />
    </TouchableOpacity>
  )
}