const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts
const defaultAssetExts = require('metro-config/src/defaults/defaults').assetExts

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // eslint-disable-next-line require-await
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer')
  },
  resolver: {
    assetExts: defaultAssetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultSourceExts, 'cjs', 'svg']
  }
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
